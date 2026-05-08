import type { ChatListItem, ChatListValue, ChatRawItem, ChatViewItem } from './Chat.common.types'

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
