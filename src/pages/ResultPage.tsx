import { Link, useLocation, useParams, Navigate } from 'react-router-dom'
import { getExamQuestions, examsMeta, PASS_SCORE } from '../data/exams'
import { scoreExam } from '../lib/history'
import { freshExamUrl } from '../lib/examUrl'
import { useExamHistory } from '../hooks/useHistory'
import type { AnswerKey, Question } from '../types'

interface ResultState {
  score: number
  total: number
  passed: boolean
  answers: Record<number, AnswerKey[]>
  timedOut?: boolean
}

function formatAnswers(question: Question, keys: AnswerKey[]): string {
  const unique = [...new Set(keys)]
  if (unique.length === 0) return '—'
  return unique
    .map((key) => {
      const opt = question.options.find((o) => o.key === key)
      return opt ? `${key.toUpperCase()}) ${opt.text}` : key.toUpperCase()
    })
    .join(' · ')
}

export function ResultPage() {
  const { id } = useParams()
  const examId = Number(id)
  const location = useLocation()
  const state = location.state as ResultState | null
  const meta = examsMeta.find((e) => e.id === examId)
  const history = useExamHistory(examId)
  const questions = getExamQuestions(examId)

  if (!state?.answers || !meta) {
    return <Navigate to="/" replace />
  }

  const { answers, timedOut } = state
  const { score, total, details } = scoreExam(questions, answers)
  const passed = score >= PASS_SCORE
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  const okById = new Map(details.map((d) => [d.id, d.ok]))

  return (
    <div className="page result">
      <div className={`result-banner ${passed ? 'result-banner--pass' : 'result-banner--fail'}`}>
        <p className="eyebrow">{meta.title}</p>
        <h1>{passed ? '¡Aprobado!' : 'Reprobado'}</h1>
        <p className="result-score">
          {score} / {total} correctas ({pct}%)
        </p>
        <p className="result-note">
          Necesitas al menos {PASS_SCORE} respuestas correctas para aprobar.
        </p>
        {timedOut && (
          <p className="result-note">Se acabó el tiempo (45 min). El examen se finalizó automáticamente.</p>
        )}
      </div>

      <section className="result-stats">
        <div>
          <strong>{history.passed}</strong>
          <span>Veces aprobado</span>
        </div>
        <div>
          <strong>{history.failed}</strong>
          <span>Veces reprobado</span>
        </div>
        <div>
          <strong>{history.totalAttempts}</strong>
          <span>Total intentos</span>
        </div>
      </section>

      <section className="result-review">
        <h2>Revisión de respuestas</h2>
        <ul>
          {questions.map((q) => {
            const userKeys = [...new Set(answers[q.id] ?? [])]
            const user = formatAnswers(q, userKeys)
            const right = formatAnswers(q, q.correct)
            const ok = okById.get(q.id) ?? false
            return (
              <li key={q.id} className={ok ? 'ok' : 'bad'}>
                <span className="rev-num">{q.id}</span>
                <span className="rev-text">{q.text}</span>
                <div className="rev-ans">
                  <p>
                    <span className="rev-label">Tu respuesta:</span> {user}
                  </p>
                  {!ok && (
                    <p className="rev-correct">
                      <span className="rev-label">Correcta:</span> {right}
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <div className="result-actions">
        <Link className="btn btn--primary" to={freshExamUrl(examId)} replace>
          Repetir examen
        </Link>
        <Link className="btn btn--ghost" to="/">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
