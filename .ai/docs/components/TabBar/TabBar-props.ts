/**
 * TabBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface TabBarValue {
  id?: string | number
}

export interface TabBarItem {
  id?: string | number
  name?: ReactNode
  description?: ReactNode
  placeholder?: ReactNode
  disabled?: boolean
  iconRender?: (params: Record<string, unknown>) => ReactNode
  content?: ReactNode | ((params: Record<string, unknown>) => ReactNode)
}

export interface TabBarTabsProps {
  /** 选中的值 */
  value?: TabBarValue
  /** 标签列表 */
  list?: TabBarItem[]
  /** 分隔符 */
  separator?: ReactNode
  /** 间距 */
  gap?: string | number
  /** 描述位置 */
  descriptionPosition?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (item: TabBarItem) => void
}

export interface TabBarSlideProps {
  /** 选中的值 */
  value?: TabBarValue
  /** 标签列表 */
  list?: TabBarItem[]
  /** 分隔符 */
  separator?: ReactNode
  /** 描述位置 */
  descriptionPosition?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (item: TabBarItem) => void
}

export interface TabBarMenusProps {
  /** 选中的值 */
  value?: TabBarValue
  /** 标签列表 */
  list?: TabBarItem[]
  /** 分隔符 */
  separator?: ReactNode
  /** 描述位置 */
  descriptionPosition?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (item: TabBarItem) => void
}

export interface TabBarGroupProps {
  /** 选中的值 */
  value?: TabBarValue
  /** 标签列表 */
  list?: TabBarItem[]
  /** 分隔符 */
  separator?: ReactNode
  /** 描述位置 */
  descriptionPosition?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (item: TabBarItem) => void
}

export interface TabBarTabsRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface TabBarSlideRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface TabBarMenusRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface TabBarGroupRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}