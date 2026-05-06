import type { ChatRawItem, ChatViewFormatterOptions, ChatViewItem } from './types'


// 格式化列表数据为渲染数据, 用于渲染列表组件
function viewFormatter(
  list: ChatRawItem[] | undefined,
  { formatViewItem, formatViewList }: ChatViewFormatterOptions
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
      return { ...item, _raw: item } as ChatViewItem
    }
    return item as ChatViewItem
  })
}

export type { ChatRawItem, ChatViewItem } from './types'
export default viewFormatter
