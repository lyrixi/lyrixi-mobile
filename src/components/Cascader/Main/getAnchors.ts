import type { CascaderMainAnchorItem } from './types'

// 获取IndexBar的anchors
function getAnchors(list: CascaderMainAnchorItem[]): string[] {
  if (!Array.isArray(list) || list.length === 0) return []
  const anchors: string[] = []
  for (const item of list) {
    if (item.anchor && !anchors.includes(item.anchor)) {
      anchors.push(item.anchor)
    }
  }
  return anchors
}

export default getAnchors
