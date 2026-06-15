export type ChatPlacement = 'left' | 'right'

export interface ChatItem {
  id?: string | number
  placement?: ChatPlacement
  avatarUrl?: string
  avatarRender?: unknown
  avatarNode?: unknown
  authorRender?: unknown
  authorNode?: unknown
  content?: unknown
  name?: string
  time?: Date
  _raw?: ChatItem
  [key: string]: unknown
}

export interface ChatViewItem extends ChatItem {
  _raw: ChatItem
}

export interface ChatViewFormatterOptions {
  formatViewItem?: (item: ChatItem, ctx: { index: number }) => ChatItem
  formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
}

export interface ChatSpaceDatesResult {
  isOverTime: boolean
  dates: Date[]
}
