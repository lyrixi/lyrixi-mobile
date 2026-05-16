import type { CSSProperties, ReactNode } from 'react'

import type { ListProps, RawItem, ViewItem } from './../List/types'
import type { PageMainProps, PageMainRef } from './../Page/types'

export interface ListAsyncVirtualProp {
  getItemHeight: (item: RawItem) => number
}

export type ListAsyncLoadAction = 'load' | 'reload' | 'topRefresh' | 'bottomRefresh' | 'retry' | ''

export interface ListAsyncRef extends PageMainRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
  getAnchors?: () => string[]
  scrollToAnchor?: (anchor: string) => void
  reload?: (action?: string) => void
  getResult?: () => ListAsyncLoadResult | null
}

export interface ListAsyncLoadResult {
  status: string
  message?: string
  list?: RawItem[]
  scrollTop?: number
  [key: string]: unknown
}

// 列表属性
export interface ListAsyncProps {
  // 请求属性
  /** 对应 list */
  loadData?: (params: {
    previousResult: ListAsyncLoadResult | null
    action: string
  }) => Promise<ListAsyncLoadResult>
  initialLoad?: boolean
  errorRetry?: boolean
  onLoad?: (params: { result: ListAsyncLoadResult | null; action: ListAsyncLoadAction }) => void

  // 加载刷新属性
  /** 对应 onTopRefresh */
  disableTopRefresh?: boolean
  /** 对应 onBottomRefresh */
  disableBottomRefresh?: boolean

  // 重试属性
  emptyRetry?: boolean

  // 加载属性
  loadingRender?: (options: { action?: string }) => ReactNode
  loadingModalStyle?: CSSProperties
  loadingModalClassName?: string
  loadingMaskStyle?: CSSProperties
  loadingMaskClassName?: string
  loadingPortal?: HTMLElement

  // 子组件特定属性属性
  list?: ListProps['list']
  /** 虚拟列表容器高度（VirtualList → 内层 List 的 style.height） */
  height?: number
  children?: ReactNode

  // 共用属性
  // Value & Display Value
  value?: ListProps['value']
  formatViewList?: (
    list: RawItem[],
    meta?: { result: ListAsyncLoadResult | null }
  ) => ViewItem[]
  formatViewItem?: (
    item: RawItem,
    options: { index: number; result?: ListAsyncLoadResult | null }
  ) => ViewItem

  // Status
  multiple?: ListProps['multiple']
  allowClear?: ListProps['allowClear']
  checkable?: ListProps['checkable']
  virtual?: ListAsyncVirtualProp
  threshold?: number
  touchStopPropagation?: boolean

  // Style
  safeArea?: boolean
  style?: CSSProperties
  className?: string
  itemStyle?: ListProps['itemStyle']
  itemClassName?: ListProps['itemClassName']
  itemLayout?: ListProps['itemLayout']
  checkboxVariant?: ListProps['checkboxVariant']
  checkboxPosition?: ListProps['checkboxPosition']

  // Elements
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

  // Events
  onChange?: ListProps['onChange']
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
}
