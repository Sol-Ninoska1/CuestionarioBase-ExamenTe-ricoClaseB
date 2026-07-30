export function freshExamUrl(examId: number): string {
  return `/examen/${examId}?n=${Date.now()}`
}
