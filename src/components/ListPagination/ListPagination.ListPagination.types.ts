import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputTextProps } from './../Input/Input.Text.types'
import type { ListProps, RawItem } from './../List/types'
import type { PageMainProps } from './../Page/types'
import type {
  ListAsyncLoadAction,
  ListAsyncLoadResult,
  ListAsyncVirtualProp
} from './../ListAsync/types'

/**
 * 聚合 ListPagination.Combo / Modal / Main 的 ref；各入口仅实现其子集。
 *
 * // 公用属性：无
 * // Page / ListAsync 透传：element、getElement、getAnchors、scrollToAnchor、reload、getResult
 * // Modal 透传：maskElement、getMaskElement、modalElement、getModalElement
 * // Main 专用：updateCache、clearCache、getCache
 * // Combo（Input.Select）透传：displayValue、getDisplayValue
 * // Combo 组合层专用：close、open
 */
export interface ListPaginationRef {
  // Page / ListAsync 透传
  element?: HTMLElement | null
  getElement?: () => HTMLElement | null
  getAnchors?: () => string[]
  scrollToAnchor?: (anchor: string) => void
  reload?: (action?: string) => void
  getResult?: () => ListAsyncLoadResult | null

  // Modal 透传
  maskElement?: HTMLDivElement | null
  getMaskElement?: () => HTMLDivElement | null
  modalElement?: HTMLDivElement | null
  getModalElement?: () => HTMLDivElement | null

  // Main 专用（分页缓存）
  updateCache?: (extraCache?: Record<string, unknown>) => void
  clearCache?: () => unknown
  getCache?: () => unknown

  // Combo（Input.Select）透传
  displayValue?: string
  getDisplayValue?: (newValue?: unknown) => string

  // Combo 组合层专用
  close?: () => void
  open?: () => void
}

/**
 * 聚合 ListPagination.Combo / Modal / Main 的 props；各入口仅使用其子集（未使用字段在运行时忽略）。
 *
 * // 公用属性：与 ListAsync 列表行为一致（不含 loadData，由 Main 内部请求）
 * // Main 专用属性：cacheName、url、headers、payload、pagination、formatPayload、formatResult
 * // Modal 专用属性：open、maskClosable、list（弹层头部上下文）、modalStyle、portal、title、onOk、onClose 等
 * // Combo 专用属性：placeholder、formatter、Input.Select 形态与 onBeforeOpen 等
 */
export interface ListPaginationProps {
  // 公用属性
  initialLoad?: boolean
  errorRetry?: boolean
  onLoad?: (params: { result: ListAsyncLoadResult | null; action: ListAsyncLoadAction }) => void
  disableTopRefresh?: boolean
  disableBottomRefresh?: boolean
  emptyRetry?: boolean
  loadingRender?: (options: { action?: string }) => ReactNode
  loadingModalStyle?: CSSProperties
  loadingModalClassName?: string
  loadingMaskStyle?: CSSProperties
  loadingMaskClassName?: string
  loadingPortal?: HTMLElement
  children?: ReactNode
  list?: ListProps['list']
  value?: ListProps['value']
  formatViewList?: ListProps['formatViewList']
  formatViewItem?: ListProps['formatViewItem']
  multiple?: ListProps['multiple']
  allowClear?: ListProps['allowClear']
  checkable?: ListProps['checkable']
  virtual?: ListAsyncVirtualProp
  threshold?: number
  touchStopPropagation?: boolean
  safeArea?: boolean
  style?: CSSProperties
  className?: string
  itemStyle?: ListProps['itemStyle']
  itemClassName?: ListProps['itemClassName']
  itemLayout?: ListProps['itemLayout']
  checkboxVariant?: ListProps['checkboxVariant']
  checkboxPosition?: ListProps['checkboxPosition']
  itemRender?: ListProps['itemRender']
  prependRender?: (options: {
    list?: ListProps['list']
    value?: ListProps['value']
    onChange?: ListProps['onChange']
  }) => ReactNode
  appendRender?: (options: {
    list?: ListProps['list']
    value?: ListProps['value']
    onChange?: ListProps['onChange']
  }) => ReactNode
  onChange?: ListProps['onChange']
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']

  // Main 专用属性
  cacheName?: string
  url?: string
  headers?: Record<string, string>
  payload?: Record<string, unknown>
  pagination?: { rows?: number }
  formatPayload?: (
    params: Record<string, unknown>
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  formatResult?: (
    result: unknown,
    options: { payload: Record<string, unknown> }
  ) => Promise<ListAsyncLoadResult> | ListAsyncLoadResult

  // Modal 专用属性
  open?: boolean
  maskClosable?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: HTMLElement | string | boolean | null
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  headerRender?: (options: { open?: boolean; value?: unknown; list?: RawItem[] }) => ReactNode
  onOk?: (value: unknown) => Promise<unknown | false> | unknown | false
  onClose?: () => void

  // Combo 专用属性
  placeholder?: string
  autoSize?: boolean
  mode?: string
  readOnly?: boolean
  disabled?: boolean
  formatter?: (value: unknown, options?: { separator?: string }) => string
  separator?: string
  leftIconNode?: InputTextProps['leftIconNode']
  rightIconNode?: InputTextProps['rightIconNode']
  clearRender?: InputTextProps['clearRender']
  onClick?: (e: MouseEvent) => void
  onBeforeOpen?: () => Promise<boolean | undefined> | boolean | undefined
}
