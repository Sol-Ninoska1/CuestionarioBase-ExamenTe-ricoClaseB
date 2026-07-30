import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getExamQuestions, examsMeta, PASS_SCORE, EXAM_DURATION_MS } from '../data/exams'
import { scoreExam, saveAttempt } from '../lib/history'
import type { AnswerKey, Question } from '../types'

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function nextSelection(question: Question, currentSel: AnswerKey[], key: AnswerKey): AnswerKey[] {
  if (question.type === 'single') {
    return currentSel[0] === key ? currentSel : [key]
  }

  if (currentSel.includes(key)) {
    return currentSel.filter((k) => k !== key)
  }

  // Con cupo exacto: no reemplazar en silencio; hay que desmarcar antes
  if (question.selectCount != null && currentSel.length >= question.selectCount) {
    return currentSel
  }

  return [...currentSel, key]
}

export function ExamPage() {
  const { id } = useParams()
  const examId = Number(id)
  const navigate = useNavigate()
  const meta = examsMeta.find((e) => e.id === examId)
  const questions = useMemo(() => getExamQuestions(examId), [examId])
  const available = Boolean(meta?.available && questions.length > 0)

  const [answers, setAnswers] = useState<Record<number, AnswerKey[]>>({})
  const [current, setCurrent] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_MS / 1000)

  const answersRef = useRef(answers)
  const finishedRef = useRef(false)

  useEffect(() => {
    answersRef.current = answers
  }, [answers])

  const submitExam = useCallback(
    (auto = false) => {
      if (finishedRef.current) return

      const currentAnswers = answersRef.current

      if (!auto) {
        const unanswered = questions.filter((q) => (currentAnswers[q.id] ?? []).length === 0)
        if (unanswered.length > 0) {
          const go = window.confirm(
            `Hay ${unanswered.length} pregunta(s) sin responder. ¿Finalizar de todos modos?`,
          )
          if (!go) {
            const firstMissing = questions.findIndex(
              (q) => (currentAnswers[q.id] ?? []).length === 0,
            )
            if (firstMissing >= 0) setCurrent(firstMissing)
            return
          }
        }
      }

      finishedRef.current = true

      const { score, total } = scoreExam(questions, currentAnswers)
      const passed = score >= PASS_SCORE

      saveAttempt(examId, passed)

      navigate(`/resultado/${examId}`, {
        replace: true,
        state: {
          score,
          total,
          passed,
          answers: currentAnswers,
          timedOut: auto,
        },
      })
    },
    [questions, examId, navigate],
  )

  const submitExamRef = useRef(submitExam)
  submitExamRef.current = submitExam

  useEffect(() => {
    if (!available) return

    finishedRef.current = false
    const endsAt = Date.now() + EXAM_DURATION_MS
    let timedOut = false

    const tick = () => {
      const left = Math.max(0, Math.ceil((endsAt - Date.now()) / 1000))
      setSecondsLeft(left)
      if (left === 0 && !timedOut) {
        timedOut = true
        submitExamRef.current(true)
      }
    }

    tick()
    const intervalId = window.setInterval(tick, 250)
    return () => window.clearInterval(intervalId)
  }, [available, examId])

  if (!available || !meta) {
    return (
      <div className="page">
        <p>Este examen aún no está disponible.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  const question = questions[current]
  const selected = answers[question.id] ?? []
  const answeredCount = questions.filter((q) => (answers[q.id] ?? []).length > 0).length
  const timerUrgent = secondsLeft <= 5 * 60
  const atLimit =
    question.type === 'multiple' &&
    question.selectCount != null &&
    selected.length >= question.selectCount

  function toggleOption(key: AnswerKey) {
    setAnswers((prev) => {
      const nextSel = nextSelection(question, prev[question.id] ?? [], key)
      const next = { ...prev, [question.id]: nextSel }
      answersRef.current = next
      return next
    })
  }

  return (
    <div className="page exam">
      <header className="exam__top">
        <div className="exam__header-row">
          <Link className="back-link" to="/">
            ← Inicio
          </Link>
          <p
            className={`exam__timer ${timerUrgent ? 'exam__timer--urgent' : ''}`}
            role="timer"
            aria-live="polite"
            aria-label={`Tiempo restante ${formatTime(secondsLeft)}`}
          >
            {formatTime(secondsLeft)}
          </p>
        </div>
        <div>
          <h1>{meta.title}</h1>
          <p className="exam__progress">
            Pregunta {current + 1} de {questions.length} · Respondidas: {answeredCount}
          </p>
        </div>
        <div className="progress-bar" aria-hidden="true">
          <span style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
      </header>

      <article className="question-card">
        <p className="question-card__num">Pregunta {question.id}</p>
        <h2>{question.text}</h2>
        <p className="question-card__hint">{question.instruction}</p>
        {question.type === 'multiple' && (
          <p className="question-card__count">
            {question.selectCount != null
              ? `Seleccionadas: ${selected.length} de ${question.selectCount}`
              : `Seleccionadas: ${selected.length}`}
            {atLimit ? ' · Desmarca una si quieres cambiar' : ''}
          </p>
        )}

        {question.image && (
          <div className="question-image">
            <img src={question.image} alt="" />
          </div>
        )}

        <ul className="options">
          {question.options.map((opt) => {
            const isOn = selected.includes(opt.key)
            return (
              <li key={opt.key}>
                <button
                  type="button"
                  className={`option ${isOn ? 'option--selected' : ''}`}
                  onClick={() => toggleOption(opt.key)}
                  aria-pressed={isOn}
                >
                  <span className="option__key">{opt.key.toUpperCase()}</span>
                  <span>{opt.text}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </article>

      <nav className="exam__nav">
        <button
          type="button"
          className="btn btn--ghost"
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
        >
          Anterior
        </button>

        {current < questions.length - 1 ? (
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => setCurrent((c) => c + 1)}
          >
            Siguiente
          </button>
        ) : (
          <button type="button" className="btn btn--accent" onClick={() => submitExam(false)}>
            Fin del examen
          </button>
        )}
      </nav>

      <div className="question-dots" role="navigation" aria-label="Ir a pregunta">
        {questions.map((q, i) => {
          const done = (answers[q.id] ?? []).length > 0
          return (
            <button
              key={q.id}
              type="button"
              className={`dot ${i === current ? 'dot--current' : ''} ${done ? 'dot--done' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Pregunta ${q.id}`}
            />
          )
        })}
      </div>
    </div>
  )
}
