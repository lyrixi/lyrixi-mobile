/** `toServerParams` 返回值，拼入 `Request` 请求体（与 `toServerParams` 映射一致，业务侧可按字段扩展） */
export type ServerParams = {
  keyword?: unknown
}

/**
 * 后台 HTTP 返回体（与 `queryData` 的 `Request.post` 响应一致）。
 * `T` 为 `data` 区原始结构（如含「名称」「描述」等），再经 `toData` 映射为业务字段。
 */
export type QueryDataResponse<T = Record<string, unknown>> = Readonly<{
  code: '1' | '0'
  message: string
  data: T | undefined
}>

/** `queryData` 处理后的统一结构（页面侧 `useState` 等使用） */
export type ResultState<T = Record<string, unknown>> = Readonly<{
  status: 'success' | 'error'
  message: string
  data: T | undefined
}>

/** 示例页查询参数（`[queryParams, setQueryParams]`）；`queryData` / `toServerParams` 直接透传本类型 */
export type QueryParamsState = Record<string, unknown> | null
