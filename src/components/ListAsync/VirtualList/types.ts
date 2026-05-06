import type { CSSProperties, ReactNode } from 'react'

import type { ListProps, RawItem } from './../../List/List/types'
import type { PageMainProps, PageMainRef } from './../../Page/Main/types'

export interface VirtualListVirtualData {
  type?: string
  height: number
  top: number
  index: number
}

export type VirtualListVirtualItem = Record<string, unknown> & { virtualData: VirtualListVirtualData }

export interface VirtualListGetVisibleItemsOptions {
  prependHeight: number
  items: VirtualListVirtualItem[]
  itemHeights: number[]
  scrollTop: number | undefined
  containerHeight: number
}

export interface VirtualOptions {
  getItemHeight: (item: RawItem) => number
}

export interface VirtualListRef extends PageMainRef {
  getAnchors: () => string[]
  scrollToAnchor: (anchor: string) => void
}

export interface VirtualListProps extends ListProps {
  height?: number
  virtual?: VirtualOptions
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
