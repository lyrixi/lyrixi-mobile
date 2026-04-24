import React from 'react'

function formatViewItem(item: Record<string, unknown>) {
  return {
    id: item.id,
    // 左侧图片
    imageUrl: (item.imageUrl as string | undefined) || '',
    // 头像
    avatarUrl: (item.avatarUrl as string | undefined) || '',
    // 第一行文字
    title: item.name,
    // 第二行文字
    description: item.introduce,
    // 第一行右上角文字
    note: item.note,
    // 第三行文字
    content: item.content,
    // 右侧操作按钮
    actionRender: (it: Record<string, unknown>) => {
      return <div>Click {String(it.name ?? '')}</div>
    }
  }
}

export default formatViewItem
