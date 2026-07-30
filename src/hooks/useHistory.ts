import { useSyncExternalStore } from 'react'
import type { ExamHistory } from '../types'
import { getExamHistory, loadHistory } from '../lib/history'

function subscribe(cb: () => void) {
  window.addEventListener('examenes-history-updated', cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener('examenes-history-updated', cb)
    window.removeEventListener('storage', cb)
  }
}

function getSnapshot() {
  return localStorage.getItem('examenes-conduccion-history') ?? ''
}

export function useExamHistory(examId: number): ExamHistory {
  useSyncExternalStore(subscribe, getSnapshot, () => '')
  return getExamHistory(examId)
}

export function useAllHistory(): Record<number, ExamHistory> {
  useSyncExternalStore(subscribe, getSnapshot, () => '')
  return loadHistory()
}
