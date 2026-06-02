import type { CSSProperties, ReactNode } from 'react'

import type { ListProps } from '../../List/types'
import type { PageMainProps } from '../../Page/types'
import type {
  ListAsyncLoadAction,
  ListAsyncLoadResult,
  ListAsyncVirtualProp
} from '../../ListAsync/types'
import type { ListAsyncItem, ListAsyncViewItem } from '../../ListAsync/types/ListAsync.common.types'

/** ListPagination 对外列表项 */
export interface ListPaginationItem extends ListAsyncItem {
  children?: ListPaginationItem[]
}

/** ListPagination 格式化后的渲染项 */
export interface ListPaginationViewItem extends ListAsyncViewItem {
  children?: ListPaginationViewItem[]
}

/** Main / Modal / Combo 共用的列表与异步加载行为 */
export interface ListPaginationListProps
  extends Pick<
    ListProps,
    | 'multiple'
    | 'allowClear'
    | 'checkable'
    | 'itemStyle'
    | 'itemClassName'
    | 'itemLayout'
    | 'checkboxVariant'
    | 'checkboxPosition'
  > {
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
  value?: ListPaginationItem | ListPaginationItem[] | null
  list?: ListPaginationItem[]
  formatViewList?: (list: ListPaginationItem[]) => ListPaginationViewItem[]
  formatViewItem?: (item: ListPaginationItem, options: { index: number }) => ListPaginationViewItem
  virtual?: ListAsyncVirtualProp
  threshold?: number
  touchStopPropagation?: boolean
  safeArea?: boolean
  style?: CSSProperties
  className?: string
  itemRender?: (
    item: ListPaginationItem,
    options: { index: number; checked: boolean; onChange: (item: ListPaginationItem) => void }
  ) => ReactNode
  prependRender?: (options: {
    list?: ListPaginationItem[]
    value?: ListPaginationItem | ListPaginationItem[] | null
    onChange?: (
      newValue: ListPaginationItem | ListPaginationItem[] | null,
      options?: { action?: string; checkedItem: ListPaginationItem }
    ) => void
  }) => ReactNode
  appendRender?: (options: {
    list?: ListPaginationItem[]
    value?: ListPaginationItem | ListPaginationItem[] | null
    onChange?: (
      newValue: ListPaginationItem | ListPaginationItem[] | null,
      options?: { action?: string; checkedItem: ListPaginationItem }
    ) => void
  }) => ReactNode
  onChange?: (
    newValue: ListPaginationItem | ListPaginationItem[] | null,
    options?: { action?: string; checkedItem: ListPaginationItem }
  ) => void
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
}
