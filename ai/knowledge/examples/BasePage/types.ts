import type { CSSProperties } from 'react'

/**
 * 与 init-page / Result 展示约定：见 Result 组件注释 empty|500|success|…
 * @see src/components/Result/Result/index.tsx
 */
export type BasePageResultStatus = 'empty' | '500' | 'success' | 'waiting' | 'info' | 'warning' | 'error'

/** 首屏/详情：业务 payload，DSL 可收窄为具体接口 */
export type BasePageDetail = Readonly<Record<string, unknown>>

export function toBasePageDetail(value: unknown): BasePageDetail | null {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return null
  }
  return value as BasePageDetail
}

export function getBasePageDetailKeyCount(detail: BasePageDetail): number {
  return Object.keys(detail).length
}

export type BasePageQueryDataSuccess = Readonly<{
  data: BasePageDetail
}>

export type BasePageQueryDataError = Readonly<{
  status: BasePageResultStatus
  message: string
}>

export type BasePageQueryDataResult = BasePageQueryDataSuccess | BasePageQueryDataError

export function isBasePageQuerySuccess(
  value: BasePageQueryDataResult
): value is BasePageQueryDataSuccess {
  return 'data' in value
}

export function isBasePageQueryError(
  value: BasePageQueryDataResult
): value is BasePageQueryDataError {
  return 'status' in value && 'message' in value
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
