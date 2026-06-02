import type { ListItem } from '../../../List/types'

// 获取当前项在列表中的索引
const flattenList = (list: ListItem[] | null | undefined): ListItem[] => {
  if (!Array.isArray(list) || !list) return []
  let items: ListItem[] = []
  for (let item of list) {
    if (Array.isArray(item.children) && (item.children as unknown[]).length) {
      items = items.concat(item.children as ListItem[])
    } else {
      items.push(item)
    }
  }
  return items
}

export default flattenList
