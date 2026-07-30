import type { ExamMeta, Question } from '../types'
import { exam1Questions } from './exam1'
import { exam2Questions } from './exam2'
import { exam3Questions } from './exam3'
import { exam4Questions } from './exam4'
import { exam5Questions } from './exam5'
import { exam6Questions } from './exam6'
import { exam7Questions } from './exam7'
import { exam8Questions } from './exam8'

export const PASS_SCORE = 31 // Nota mínima oficial Chile (~31/35)
export const EXAM_DURATION_MS = 45 * 60 * 1000

export const examsMeta: ExamMeta[] = [
  { id: 1, title: 'Examen 1', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 2, title: 'Examen 2', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 3, title: 'Examen 3', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 4, title: 'Examen 4', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 5, title: 'Examen 5', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 6, title: 'Examen 6', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 7, title: 'Examen 7', available: true, questionCount: 35, passScore: PASS_SCORE },
  { id: 8, title: 'Examen 8', available: true, questionCount: 35, passScore: PASS_SCORE },
]

export function getExamQuestions(examId: number): Question[] {
  if (examId === 1) return exam1Questions
  if (examId === 2) return exam2Questions
  if (examId === 3) return exam3Questions
  if (examId === 4) return exam4Questions
  if (examId === 5) return exam5Questions
  if (examId === 6) return exam6Questions
  if (examId === 7) return exam7Questions
  if (examId === 8) return exam8Questions
  return []
}
