/**
 * List Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

// ---------- 根组件 List ----------

export type ListItem = {
  id?: string | number
  name?: string
  disabled?: boolean
  children?: ListItem[]
  [key: string]: unknown
}

export type ListViewItem = {
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
  children?: ListViewItem[]
}

export interface ListProps {
  /** 选中的值 */
  value?: ListItem | ListItem[] | null
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 列表数据 */
  list?: ListItem[]
  /** 格式化列表 */
  formatViewList?: (list: ListItem[]) => ListViewItem[]
  /** 格式化项 */
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
  /** 项布局 */
  itemLayout?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 自定义项渲染 */
  itemRender?: (
    item: ListItem,
    options: { index: number; checked: boolean; onChange: (item: ListItem) => void }
  ) => ReactNode
  /** 变化事件 */
  onChange?: (
    newValue: ListItem | ListItem[] | null,
    options?: { action?: string; checkedItem: ListItem }
  ) => void
}

export interface ListRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}

// ---------- List.Item ----------

export interface ListItemProps {
  /** 原始数据 */
  _raw?: ListItem
  /** 是否选中 */
  checked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 布局 */
  layout?: string
  /** 图片地址 */
  imageUrl?: string
  /** 图片渲染 */
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  /** 头像地址 */
  avatarUrl?: string
  /** 头像渲染 */
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 描述 */
  description?: ReactNode
  /** 备注 */
  note?: ReactNode
  /** 内容 */
  content?: ReactNode
  /** 操作区渲染 */
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  /** 选中事件 */
  onSelect?: (item: ListItem & { checked?: boolean }) => void
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

// ---------- List.HeaderItem ----------

export interface ListHeaderItemProps {
  /** 锚点 */
  anchor?: string
  /** 描述 */
  description?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标题 */
  title?: ReactNode
}

// ---------- List.InfiniteScroll ----------

export interface ListInfiniteScrollProps {
  /** 状态 */
  status?: string
  /** 内容 */
  content?: ReactNode
}