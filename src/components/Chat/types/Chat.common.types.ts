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

export interface ChatItem extends ChatRawItem {}

export interface ChatListValue {
  id?: string | number
  [key: string]: unknown
}

export interface ChatViewFormatterOptions {
  formatViewItem?: (item: ChatRawItem, ctx: { index: number }) => ChatRawItem
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
}

export interface ChatSpaceDatesResult {
  isOverTime: boolean
  dates: Date[]
}
