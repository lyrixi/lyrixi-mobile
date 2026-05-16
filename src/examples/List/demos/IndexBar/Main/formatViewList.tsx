import React from 'react'

import type { RawItem, ViewItem, ViewItemBase } from 'lyrixi-mobile'

// 将列表数据按照 anchor 字段分组
function formatViewList(list: RawItem[]): ViewItem[] {
  if (!Array.isArray(list) || list.length === 0) {
    return []
  }

  // 使用 Map 来按 anchor 分组（分组头也是 ViewItem：必含 _raw、id）
  const groupMap = new Map<string, ViewItem>()

  list.forEach((raw) => {
    const item = raw as Record<string, unknown>
    const anchor = item.anchor as string | undefined
    if (anchor) {
      if (!groupMap.has(anchor)) {
        groupMap.set(anchor, {
          _raw: {} as RawItem,
          id: anchor,
          title: anchor,
          anchor: anchor,
          children: []
        })
      }
      const group = groupMap.get(anchor)
      if (!group?.children) return
      group.children.push({
        // 原始行引用（与 `list` 中项对应；分组后顺序变化时由业务保证 _raw）
        _raw: item,
        // 唯一标识(必传)
        id: item.id,
        // 左侧图片
        imageUrl: String(item.imageUrl ?? ''),
        // 头像
        avatarUrl: String(item.avatarUrl ?? ''),
        // 第一行文字
        title: item.name,
        // 第二行文字
        description: item.introduce,
        // 第一行右上角文字
        note: item.note,
        // 第三行文字
        content: item.content,
        // 右侧操作按钮
        actionRender: (row: ViewItemBase & { checked?: boolean }) => {
          const name = row.name
          return <div>Click {name as React.ReactNode}</div>
        }
      })
    }
  })

  console.log(groupMap)
  // 将 Map 转换为数组，并按 anchor 字母顺序排序
  return Array.from(groupMap.values()).sort((a, b) => {
    return String(a.anchor ?? '').localeCompare(String(b.anchor ?? ''))
  })
}

export default formatViewList
