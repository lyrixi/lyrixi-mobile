export type RawResult<Row = Record<string, unknown>> = Readonly<{
  code?: string
  rows?: Row[] | undefined
  errMsg?: string
  message?: string
}>

export type QueryResult<T = Record<string, unknown>> = Readonly<{
  status: 'success' | 'error' | 'empty'
  message: string
  data: T | undefined
}>
