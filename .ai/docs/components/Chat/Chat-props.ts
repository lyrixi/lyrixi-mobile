/**
 * Chat Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

// ---------- Chat.List ----------

export interface ChatRawItem {
  id?: string | number
  position?: string
  avatarUrl?: string
  avatarRender?: unknown
  avatarNode?: unknown
  authorRender?: unknown
  authorNode?: unknown
  content?: unknown
  name?: string
  time?: Date
  _raw?: ChatRawItem
  [key: string]: unknown
}

export interface ChatViewItem extends ChatRawItem {
  _raw: ChatRawItem
}

export interface ChatListValue {
  id?: string | number
  [key: string]: unknown
}

export interface ChatListProps {
  /** 时间间隔，默认 `60000` */
  timeSpace?: number
  /** 选中的值 */
  value?: ChatListValue[]
  /** 消息列表 */
  list?: ChatRawItem[]
  /** 格式化列表 */
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
  /** 格式化项 */
  formatViewItem?: (item: ChatRawItem, ctx: { index: number }) => ChatRawItem
  /** 是否可选 */
  checkable?: boolean
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 变化事件 */
  onChange?: (value: ChatListValue[]) => void
}

export interface ChatListRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}

// ---------- Chat.Item ----------

export interface ChatItemProps {
  /** 消息唯一标识 */
  id?: string | number
  /** 原始消息数据 */
  _raw?: Record<string, unknown>
  /** 是否选中 */
  checked?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 自定义类名 */
  className?: string
  /** 气泡位置 */
  position?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPosition?: string
  /** 头像地址 */
  avatarUrl?: string
  /** 头像渲染 */
  avatarRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  /** 头像节点 */
  avatarNode?: ReactNode
  /** 作者渲染 */
  authorRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  /** 作者节点 */
  authorNode?: ReactNode
  /** 消息内容 */
  content?: ReactNode
  /** 选中变化事件 */
  onChange?: (checked: boolean) => void
}

export interface ChatItemRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}