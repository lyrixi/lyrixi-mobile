import type { ChatItem, ChatViewItem } from './Chat.common.types'

export interface ChatListRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatListProps {
  // Value & Display Value
  value?: ChatItem[]
  list?: ChatItem[]
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
  formatViewItem?: (item: ChatItem, options: { index: number }) => ChatItem
  // Status
  checkable?: boolean
  // Style
  checkboxVariant?: string
  checkboxPosition?: string
  // Elements
  timeSpace?: number
  // Events
  onChange?: (value: ChatItem[]) => void
}
