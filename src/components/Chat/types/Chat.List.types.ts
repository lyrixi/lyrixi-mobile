import type { ChatItem, ChatListValue, ChatRawItem, ChatViewItem } from './Chat.common.types'

export interface ChatListRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatListProps {
  // Value & Display Value
  value?: ChatListValue[]
  list?: ChatItem[]
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
  formatViewItem?: (item: ChatRawItem, ctx: { index: number }) => ChatRawItem
  // Status
  checkable?: boolean
  // Style
  checkboxVariant?: string
  checkboxPosition?: string
  // Elements
  timeSpace?: number
  // Events
  onChange?: (value: ChatListValue[]) => void
}
