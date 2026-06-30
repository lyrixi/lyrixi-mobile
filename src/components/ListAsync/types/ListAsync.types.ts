import type { CSSProperties, ReactNode } from 'react'

import type { ListProps } from '../../List/types'
import type { PageMainProps, PageMainRef } from '../../Page/types'

import type { ListAsyncItem, ListAsyncViewItem } from './ListAsync.common.types'

export interface ListAsyncVirtualProp {
  getItemHeight: (item: ListAsyncItem) => number
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
  list?: ListAsyncItem[]
  scrollTop?: number
  [key: string]: unknown
}

export interface ListAsyncProps {
  loadData?: (options: {
    previousResult: ListAsyncLoadResult | null
    action: string
  }) => Promise<ListAsyncLoadResult>
  // Status
  initialLoad?: boolean
  errorRetry?: boolean
  onLoad?: (options: { result: ListAsyncLoadResult | null; action: ListAsyncLoadAction }) => void
  disableTopRefresh?: boolean
  disableBottomRefresh?: boolean
  emptyRetry?: boolean
  loadingRender?: (options: { action?: string }) => ReactNode
  loadingModalStyle?: CSSProperties
  loadingModalClassName?: string
  loadingMaskStyle?: CSSProperties
  loadingMaskClassName?: string
  loadingPortal?: HTMLElement
  list?: ListAsyncItem[]
  height?: number
  children?: ReactNode
  // Value & Display Value
  value?: ListAsyncItem | ListAsyncItem[] | null
  formatViewList?: (
    list: ListAsyncItem[],
    options?: { result: ListAsyncLoadResult | null }
  ) => ListAsyncViewItem[]
  formatViewItem?: (
    item: ListAsyncItem,
    options: { index: number; result?: ListAsyncLoadResult | null }
  ) => ListAsyncViewItem
  multiple?: ListProps['multiple']
  allowClear?: ListProps['allowClear']
  checkable?: ListProps['checkable']
  virtual?: ListAsyncVirtualProp
  threshold?: number
  touchStopPropagation?: boolean
  safeArea?: boolean
  // Style
  style?: CSSProperties
  className?: string
  itemStyle?: ListProps['itemStyle']
  itemClassName?: ListProps['itemClassName']
  itemLayout?: ListProps['itemLayout']
  checkboxVariant?: ListProps['checkboxVariant']
  checkboxPosition?: ListProps['checkboxPosition']
  // Elements
  itemRender?: (
    item: ListAsyncItem,
    options: { index: number; checked: boolean; onChange: (item: ListAsyncItem) => void }
  ) => ReactNode
  prependRender?: (options: {
    list?: ListAsyncItem[]
    value?: ListAsyncItem | ListAsyncItem[] | null
    // Events
    onChange?: (
      newValue: ListAsyncItem | ListAsyncItem[] | null,
      options?: { action?: string; checkedItem: ListAsyncItem }
    ) => void
  }) => ReactNode
  appendRender?: (options: {
    list?: ListAsyncItem[]
    value?: ListAsyncItem | ListAsyncItem[] | null
    onChange?: (
      newValue: ListAsyncItem | ListAsyncItem[] | null,
      options?: { action?: string; checkedItem: ListAsyncItem }
    ) => void
  }) => ReactNode
  onChange?: (
    newValue: ListAsyncItem | ListAsyncItem[] | null,
    options?: { action?: string; checkedItem: ListAsyncItem }
  ) => void
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
}
