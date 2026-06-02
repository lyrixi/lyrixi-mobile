import type { CSSProperties, MutableRefObject, ReactNode } from 'react'

import type { CascaderItem, LoadDataFn } from './Cascader.common.types'

export interface CascaderMainAnchorItem {
  anchor?: string
  [key: string]: unknown
}

export interface CascaderMainUpdateIsLeafTabItem {
  id?: string | number
  isLeaf?: boolean
  [key: string]: unknown
}

export interface CascaderMainUpdateIsLeafParams {
  currentValue?: CascaderMainUpdateIsLeafTabItem[]
  value?: CascaderMainUpdateIsLeafTabItem[]
  tabsRef: MutableRefObject<CascaderMainUpdateIsLeafTabItem[]>
}

export interface CascaderMainLoadChildrenResult {
  async: boolean
  status: 'success' | 'error' | 'empty'
  list?: CascaderItem[]
  message?: string
}

export interface CascaderMainResultState {
  status: string
  list?: CascaderItem[]
  message?: ReactNode
  async?: boolean
}

export interface CascaderMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
  update: (value: CascaderItem[] | null | undefined, opts?: { action?: string }) => void
}

export interface CascaderMainProps {
  // Value & Display Value
  value?: CascaderItem[]
  list?: CascaderItem[]
  loadData?: LoadDataFn
  // Style
  listStyle?: CSSProperties
  listClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  // Elements
  searchVisible?: boolean
  tabbarRender?: (params: {
    list: CascaderItem[]
    value: CascaderItem | undefined
    onChange: (tab: CascaderItem) => void
  }) => ReactNode
  // Events
  onSearch?: (keyword: string, ctx: { list: CascaderItem[] }) => unknown
  onChange?: (value: CascaderItem[]) => void
}
