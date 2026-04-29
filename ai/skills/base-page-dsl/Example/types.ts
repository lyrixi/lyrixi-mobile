/**
 * 后台 HTTP 返回体（与 `queryData` 的 `Request.post` 响应一致）。
 * `T` 为 `data` 区原始结构（如含「名称」「描述」等），再经 `toData` 映射为业务字段。
 */
export type RawResult<T = Record<string, unknown>> = Readonly<{
  code: '1' | '0'
  message: string
  data: T | undefined
}>

// 处理后的数据格式
export type QueryResult<T = Record<string, unknown>> = Readonly<{
  status: 'success' | 'error'
  message: string
  data: T | undefined
}>
