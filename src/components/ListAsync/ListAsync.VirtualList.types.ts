import type { CSSProperties, ReactNode } from 'react'

import type { ListProps, RawItem } from './../List/types'
import type { PageMainProps, PageMainRef } from './../Page/types'

export interface ListAsyncVirtualListVirtualData {
  type?: string
  height: number
  top: number
  index: number
}

export type ListAsyncVirtualListVirtualItem = Record<string, unknown> & {
  virtualData: ListAsyncVirtualListVirtualData
}

export interface ListAsyncVirtualListGetVisibleItemsOptions {
  prependHeight: number
  items: ListAsyncVirtualListVirtualItem[]
  itemHeights: number[]
  scrollTop: number | undefined
  containerHeight: number
}

export interface ListAsyncVirtualOptions {
  getItemHeight: (item: RawItem) => number
}

export interface ListAsyncVirtualListRef extends PageMainRef {
  getAnchors: () => string[]
  scrollToAnchor: (anchor: string) => void
}

export interface ListAsyncVirtualListProps extends ListProps {
  height?: number
  virtual?: ListAsyncVirtualOptions
  threshold?: number
  touchStopPropagation?: boolean
  safeArea?: boolean
  className?: string
  style?: CSSProperties
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
  children?: ReactNode
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
}
