import type { CSSProperties, ReactNode } from 'react'

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

export type ChatListItem = ChatRawItem

export interface ChatListValue {
  id?: string | number
  [key: string]: unknown
}

export interface ChatListRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatListProps {
  value?: ChatListValue[]
  list?: ChatListItem[]
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
  formatViewItem?: (item: ChatRawItem, ctx: { index: number }) => ChatRawItem
  checkable?: boolean
  checkboxVariant?: string
  checkboxPosition?: string
  timeSpace?: number
  onChange?: (value: ChatListValue[]) => void
}

export interface ChatViewFormatterOptions {
  formatViewItem?: (item: ChatRawItem, ctx: { index: number }) => ChatRawItem
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
}

export interface SpaceDatesResult {
  isOverTime: boolean
  dates: Date[]
}

export interface ChatItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatItemProps {
  id?: string | number
  _raw?: Record<string, unknown>
  checked?: boolean
  checkable?: boolean
  className?: string
  position?: string
  style?: CSSProperties
  checkboxVariant?: string
  checkboxPosition?: string
  avatarUrl?: string
  avatarRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  avatarNode?: ReactNode
  authorRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  authorNode?: ReactNode
  content?: ReactNode
  onChange?: (checked: boolean) => void
}
