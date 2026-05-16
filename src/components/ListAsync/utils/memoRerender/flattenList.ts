import type { RawItem } from '../../../List/types'

// 获取当前项在列表中的索引
const flattenList = (list: RawItem[] | null | undefined): RawItem[] => {
  if (!Array.isArray(list) || !list) return []
  let items: RawItem[] = []
  for (let item of list) {
    if (Array.isArray(item.children) && (item.children as unknown[]).length) {
      items = items.concat(item.children as RawItem[])
    } else {
      items.push(item)
    }
  }
  return items
}

export default flattenList
