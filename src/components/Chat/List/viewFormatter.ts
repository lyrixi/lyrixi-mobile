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

// 格式化列表数据为渲染数据, 用于渲染列表组件
function viewFormatter(
  list: ChatRawItem[] | undefined,
  {
    formatViewItem,
    formatViewList
  }: {
    formatViewItem?: (item: ChatRawItem, ctx: { index: number }) => ChatRawItem
    formatViewList?: (list: ChatViewItem[]) => ChatViewItem[]
  }
): ChatViewItem[] | undefined {
  if (typeof formatViewList === 'function') {
    const newList: ChatViewItem[] = (list ?? []).map((item) => {
      return { ...item, _raw: item }
    })
    return formatViewList(newList)
  }

  if (typeof formatViewItem === 'function') {
    return list?.map((item, index) => {
      return { ...formatViewItem(item, { index }), _raw: item }
    })
  }

  return list?.map((item) => {
    if (!item._raw) {
      return { ...item, _raw: item }
    }
    return item as ChatViewItem
  })
}

export default viewFormatter
