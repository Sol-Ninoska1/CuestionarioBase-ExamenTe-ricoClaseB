export type AnswerKey = 'a' | 'b' | 'c' | 'd' | 'e' | 'f'

export type QuestionType = 'single' | 'multiple'

export interface Question {
  id: number
  text: string
  instruction: string
  type: QuestionType
  /** For multiple: exact number required, or null = any number of correct ones */
  selectCount: number | null
  options: { key: AnswerKey; text: string }[]
  correct: AnswerKey[]
  /** URL of an accompanying image (Vite-imported asset) */
  image?: string
}

export interface ExamMeta {
  id: number
  title: string
  available: boolean
  questionCount: number
  passScore: number
}

export interface ExamHistory {
  examId: number
  passed: number
  failed: number
  totalAttempts: number
}
