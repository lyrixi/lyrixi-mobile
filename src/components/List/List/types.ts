import type { CSSProperties, ReactNode } from 'react'

export type RawItem = Record<string, unknown>
export type ViewItem = RawItem & { _raw?: RawItem; children?: ViewItem[] }

export type ItemChangeArg = RawItem & { checked?: boolean }

export interface ListRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ListProps {
  value?: RawItem | RawItem[] | null
  multiple?: boolean
  allowClear?: boolean
  list?: ViewItem[]
  formatViewList?: (list: ViewItem[]) => ViewItem[]
  formatViewItem?: (item: ViewItem, options: { index: number }) => ViewItem
  checkable?: boolean
  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  itemLayout?: string
  checkboxVariant?: string
  checkboxPosition?: string
  itemRender?: (
    item: ViewItem,
    options: { index: number; checked: boolean; onChange: (item: ItemChangeArg) => void }
  ) => ReactNode
  onChange?: (
    newValue: RawItem | RawItem[] | null,
    options: { checkedItem: ItemChangeArg }
  ) => void
}
