import type { CSSProperties, ReactNode } from 'react'

// 内库使用-start
import type { InputSelectItem } from '../Input/Input.Select.types'
// 内库使用-end

/* 测试使用-start
import { InputSelectItem } from 'lyrixi-mobile'
测试使用-end */

// 原始数据
export type RawItem = InputSelectItem & {
  children?: InputSelectItem[]
  /** 虚拟列表等内部使用的布局元数据 */
  virtualData?: { type?: string; top?: number; height?: number; index?: number }
}

// 转换后的渲染数据
export type ViewItemBase = {
  _raw?: RawItem // 原始数据存到_raw中
  id?: unknown
  disabled?: boolean
  style?: CSSProperties
  className?: string
  anchor?: string
  imageUrl?: unknown
  imageRender?: (item: ViewItemBase & { checked?: boolean }) => ReactNode
  avatarUrl?: unknown
  avatarRender?: (item: ViewItemBase & { checked?: boolean }) => ReactNode
  title?: unknown
  name?: unknown
  description?: unknown
  note?: unknown
  content?: unknown
  actionRender?: (item: ViewItemBase & { checked?: boolean }) => ReactNode
}
export type ViewItem = ViewItemBase & {
  children?: ViewItemBase[]
}

// 格式化原始数据为渲染数据
export interface ListViewFormatterOptions {
  formatViewItem?: (item: RawItem, options: { index: number }) => ViewItem
  formatViewList?: (list: RawItem[]) => ViewItem[]
}

export interface ListRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ListProps {
  value?: RawItem | RawItem[] | null
  multiple?: boolean
  allowClear?: boolean
  /** 接口返回的原始列表，展示用结构由 `formatViewItem` / `formatViewList` 与内部 `viewFormatter` 生成 */
  list?: RawItem[]
  formatViewList?: (list: RawItem[]) => ViewItem[]
  formatViewItem?: (item: RawItem, options: { index: number }) => ViewItem
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
    options: { index: number; checked: boolean; onChange: (item: RawItem) => void }
  ) => ReactNode
  onChange?: (
    newValue: RawItem | RawItem[] | null,
    options?: { action?: string; checkedItem: RawItem }
  ) => void
}
