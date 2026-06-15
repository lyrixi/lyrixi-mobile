import type { CSSProperties, ReactNode } from 'react'

// 内库使用-start
import type { InputSelectItem } from '../../Input/types/Input.Select.types'
// 内库使用-end

/* 测试使用-start
import { InputSelectItem } from 'lyrixi-mobile'
测试使用-end */

// 列表项数据
interface ListItemBase extends InputSelectItem {
  virtualData?: { type?: string; top?: number; height?: number; index?: number }
}

export type ListItem = ListItemBase & {
  children?: ListItemBase[]
}

// 转换后的渲染数据
type ListViewItemBase = {
  _raw?: ListItem
  id?: unknown
  disabled?: boolean
  style?: CSSProperties
  className?: string
  anchor?: string
  imageUrl?: unknown
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  avatarUrl?: unknown
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  title?: unknown
  name?: unknown
  description?: unknown
  note?: unknown
  content?: unknown
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
}
export type ListViewItem = ListViewItemBase & {
  children?: ListViewItemBase[]
}

// 格式化原始数据为渲染数据
export interface ListViewFormatterOptions {
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
  formatViewList?: (list: ListItem[]) => ListViewItem[]
}

export interface ListRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ListProps {
  // Value & Display Value
  value?: ListItem | ListItem[] | null
  multiple?: boolean
  list?: ListItem[]
  formatViewList?: (list: ListItem[]) => ListViewItem[]
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
  itemLayout?: string
  // Status
  allowClear?: boolean
  checkable?: boolean
  checkboxVariant?: string
  checkboxPosition?: string
  // Style
  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  // Elements
  itemRender?: (
    item: ListItem,
    options: { index: number; checked: boolean; onChange: (item: ListItem) => void }
  ) => ReactNode
  // Events
  onChange?: (
    newValue: ListItem | ListItem[] | null,
    options?: { action?: string; checkedItem: ListItem }
  ) => void
}
