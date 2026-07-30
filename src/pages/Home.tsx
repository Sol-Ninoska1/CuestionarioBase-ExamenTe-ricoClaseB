import { examsMeta } from '../data/exams'
import { ExamCard } from '../components/ExamCard'

export function Home() {
  return (
    <div className="page home">
      <header className="home__hero">
        <p className="eyebrow">Licencia Clase B</p>
        <h1>Exámenes teóricos</h1>
        <p className="lede">
          Practica las 8 pruebas del cuestionario general. Puedes repetir cada examen y el
          historial guarda cuántas veces apruebas o repruebas.
        </p>
      </header>

      <section className="exam-grid" aria-label="Lista de exámenes">
        {examsMeta.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </section>
    </div>
  )
}
