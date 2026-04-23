/**
 * 对应页面中的state: result
 */
export type QueryResult<T = Record<string, unknown>> = Readonly<{
  status: 'success' | 'error'
  message: string
  data: T | undefined
}>
