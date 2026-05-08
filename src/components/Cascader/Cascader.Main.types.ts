import type { CSSProperties, MutableRefObject, ReactNode } from 'react'

import type { CascaderNode, LoadDataFn } from './Cascader.core.types'

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
  list?: CascaderNode[]
  message?: string
}

export interface CascaderMainResultState {
  status: string
  list?: CascaderNode[]
  message?: ReactNode
  async?: boolean
}

export interface CascaderMainViewProps {
  result?: CascaderMainResultState
  value?: CascaderNode[]
  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  onReLoad?: () => void
  onSelect: (item: CascaderNode) => void
}

export interface CascaderMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
  update: (value: CascaderNode[] | null | undefined, opts?: { action?: string }) => void
}

export interface CascaderMainProps {
  value?: CascaderNode[]
  list?: CascaderNode[]
  loadData?: LoadDataFn
  listStyle?: CSSProperties
  listClassName?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  searchVisible?: boolean
  tabbarRender?: (params: {
    list: CascaderNode[]
    value: CascaderNode | undefined
    onChange: (tab: CascaderNode) => void
  }) => ReactNode
  onSearch?: (keyword: string, ctx: { list: CascaderNode[] }) => unknown
  onChange?: (value: CascaderNode[]) => void
}
