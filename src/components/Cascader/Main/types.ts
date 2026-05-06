import type { CSSProperties, ReactNode } from 'react'

import type { CascaderNode, LoadDataFn } from './../cascaderTypes'

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
