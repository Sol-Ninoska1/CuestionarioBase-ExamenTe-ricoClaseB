import { Link } from 'react-router-dom'
import type { ExamMeta } from '../types'
import { useExamHistory } from '../hooks/useHistory'
import { freshExamUrl } from '../lib/examUrl'

interface Props {
  exam: ExamMeta
}

export function ExamCard({ exam }: Props) {
  const history = useExamHistory(exam.id)

  return (
    <article className={`exam-card ${exam.available ? '' : 'exam-card--locked'}`}>
      <div className="exam-card__header">
        <span className="exam-card__number">{String(exam.id).padStart(2, '0')}</span>
        <h2>{exam.title}</h2>
      </div>

      {exam.available ? (
        <>
          <p className="exam-card__meta">{exam.questionCount} preguntas · Aprueba con {exam.passScore}</p>
          <div className="exam-card__stats">
            <div>
              <strong>{history.passed}</strong>
              <span>Aprobados</span>
            </div>
            <div>
              <strong>{history.failed}</strong>
              <span>Reprobados</span>
            </div>
            <div>
              <strong>{history.totalAttempts}</strong>
              <span>Intentos</span>
            </div>
          </div>
          <Link className="btn btn--primary" to={freshExamUrl(exam.id)}>
            Dar examen
          </Link>
        </>
      ) : (
        <>
          <p className="exam-card__meta">Próximamente</p>
          <button className="btn btn--ghost" type="button" disabled>
            No disponible
          </button>
        </>
      )}
    </article>
  )
}
