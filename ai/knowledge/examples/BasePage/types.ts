import type { CSSProperties } from 'react'

/**
 * 首屏/详情等业务 payload，DSL 可收窄为具体接口
 */
export type BasePageDetail = Readonly<Record<string, unknown>>

/**
 * 统一结果态（与 DSL 约定一致）：不拆多个 Success/Error 类型名，全站用 `Result`。
 * - `success`：`data` 为有效业务数据；`message` 可为空串或成功提示
 * - `error`：`data` 为 `undefined`；`message` 为错误/空态等说明
 */
export type Result = Readonly<{
  status: 'success' | 'error'
  message: string
  data: BasePageDetail | undefined
}>

export function toBasePageDetail(value: unknown): BasePageDetail | null {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return null
  }
  return value as BasePageDetail
}

export function getBasePageDetailKeyCount(detail: BasePageDetail): number {
  return Object.keys(detail).length
}

export function isResultWithData(
  value: Result
): value is Result & { status: 'success'; data: BasePageDetail } {
  return value.status === 'success' && value.data !== undefined
}

export function isResultErrorState(value: Result): value is Result & { status: 'error' } {
  return value.status === 'error'
}

/** 审批/提交：与后端约定，含业务码与提示 */
export type ApproveDataResult = Readonly<{
  code?: string
  message?: string
}>

export type ApproveDataOptions = Readonly<{
  token?: string
}>

export function toApproveDataResult(value: unknown): ApproveDataResult {
  if (value === null || typeof value !== 'object') {
    return {}
  }
  const o = value as { code?: unknown; message?: unknown }
  return {
    code: typeof o.code === 'string' ? o.code : undefined,
    message: typeof o.message === 'string' ? o.message : undefined
  }
}

export type LoadApiResponse = Readonly<{
  code?: string
  data?: unknown
}>

export function isLoadApiResponse(value: unknown): value is LoadApiResponse {
  return value !== null && typeof value === 'object'
}

export type ErrorLike = Readonly<{
  data?: Readonly<{
    message?: string
  }>
}>

export function toErrorMessage(err: unknown, fallback: string): string {
  if (err === null || typeof err !== 'object') {
    return fallback
  }
  const o = err as ErrorLike
  return typeof o.data?.message === 'string' ? o.data.message : fallback
}

export type MainProps = Readonly<{
  data: BasePageDetail
}>

export type HeaderProps = Readonly<{
  className?: string
  style?: CSSProperties
}>

export type FooterProps = Readonly<{
  onOk?: () => void | Promise<void>
  onCancel?: () => void | Promise<void>
}>
