import { useLocation } from 'react-router-dom'
import { ExamPage } from './ExamPage'

/** Remonta el examen en cada intento nuevo (URL distinta = estado limpio). */
export function ExamRoute() {
  const location = useLocation()
  return <ExamPage key={`${location.pathname}${location.search}`} />
}
