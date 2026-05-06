import type { CSSProperties, ReactNode } from 'react'

import type { RawItem, ViewItem } from './../List/List/types'
import type { MainProps as EntityListProps } from './List/types'
import type { VirtualOptions } from './VirtualList/types'

export type LoadAction = 'load' | 'reload' | 'topRefresh' | 'bottomRefresh' | 'retry' | ''

export interface ListAsyncRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
  getAnchors?: () => string[]
  scrollToAnchor?: (anchor: string) => void
  reload: (action?: string) => void
  getResult: () => LoadResult | null
}

export interface LoadResult {
  status: string
  message?: string
  list?: ViewItem[]
  scrollTop?: number
  [key: string]: unknown
}

type SharedListProps = Omit<EntityListProps, 'formatViewList' | 'formatViewItem' | 'virtual'>

export interface ListAsyncProps extends SharedListProps {
  value?: RawItem | RawItem[] | null
  loadData?: (params: { previousResult: LoadResult | null; action: string }) => Promise<LoadResult>
  formatViewList?: (rawList: ViewItem[], options: { result: LoadResult | null }) => ViewItem[]
  formatViewItem?: (rawItem: ViewItem, options: { result: LoadResult | null; index: number }) => ViewItem
  initialLoad?: boolean
  errorRetry?: boolean
  emptyRetry?: boolean
  virtual?: VirtualOptions
  disableTopRefresh?: boolean
  disableBottomRefresh?: boolean
  loadingModalStyle?: CSSProperties
  loadingModalClassName?: string
  loadingMaskStyle?: CSSProperties
  loadingMaskClassName?: string
  loadingPortal?: HTMLElement
  loadingRender?: (options: { action?: string }) => ReactNode
  onLoad?: (params: { result: LoadResult | null; action: LoadAction }) => void
}
