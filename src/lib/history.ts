import type { AnswerKey, ExamHistory, Question } from '../types'

const STORAGE_KEY = 'examenes-conduccion-history'

interface StoredExamHistory {
  examId: number
  passed: number
  failed: number
  totalAttempts: number
}

interface LegacyExamHistory {
  examId: number
  passed: number
  failed: number
  attempts?: unknown[]
}

export function loadHistory(): Record<number, ExamHistory> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<number, LegacyExamHistory | StoredExamHistory>
    const result: Record<number, ExamHistory> = {}

    for (const [key, value] of Object.entries(parsed)) {
      const examId = Number(key)
      const legacyAttempts = 'attempts' in value ? value.attempts?.length : undefined
      result[examId] = {
        examId,
        passed: value.passed,
        failed: value.failed,
        totalAttempts:
          'totalAttempts' in value
            ? value.totalAttempts
            : legacyAttempts ?? value.passed + value.failed,
      }
    }

    return result
  } catch {
    return {}
  }
}

export function saveAttempt(examId: number, passed: boolean): void {
  const all = loadHistory()
  const current = all[examId] ?? {
    examId,
    passed: 0,
    failed: 0,
    totalAttempts: 0,
  }

  current.totalAttempts += 1
  if (passed) current.passed += 1
  else current.failed += 1

  all[examId] = current
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
  window.dispatchEvent(new Event('examenes-history-updated'))
}

export function getExamHistory(examId: number): ExamHistory {
  return (
    loadHistory()[examId] ?? {
      examId,
      passed: 0,
      failed: 0,
      totalAttempts: 0,
    }
  )
}

function uniqueKeys(keys: AnswerKey[]): AnswerKey[] {
  return [...new Set(keys)]
}

function readAnswers(
  answers: Record<number, AnswerKey[]>,
  questionId: number,
): AnswerKey[] {
  const raw = answers[questionId] ?? (answers as Record<string, AnswerKey[]>)[String(questionId)]
  return uniqueKeys(raw ?? [])
}

function setsEqual(a: AnswerKey[], b: AnswerKey[]): boolean {
  const sa = uniqueKeys(a).sort()
  const sb = uniqueKeys(b).sort()
  if (sa.length !== sb.length) return false
  return sa.every((v, i) => v === sb[i])
}

export function scoreExam(
  questions: Question[],
  answers: Record<number, AnswerKey[]>,
): { score: number; total: number; details: { id: number; ok: boolean }[] } {
  const details = questions.map((q) => ({
    id: q.id,
    ok: setsEqual(readAnswers(answers, q.id), q.correct),
  }))
  const score = details.filter((d) => d.ok).length
  return { score, total: questions.length, details }
}
