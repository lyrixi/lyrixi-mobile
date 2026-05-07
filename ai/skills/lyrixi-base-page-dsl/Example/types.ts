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

/** 示例页查询参数（`[queryParams, setQueryParams]`） */
export type QueryParamsState = Record<string, unknown> | null

/**
 * `queryData` 入参（查询条件；允许 `undefined` 以便调用方省略参数）
 * `toServerParams` 等工具若透传同一入参，复用本类型而非另起 `*Options`。
 */
export type QueryDataOptions = QueryParamsState | undefined
