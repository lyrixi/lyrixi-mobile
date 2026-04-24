import React from 'react'

type Row = Record<string, unknown> & {
  id?: string | number
  name?: string
  imageUrl?: string
  avatarUrl?: string
  introduce?: string
  note?: string
  content?: string
}

function formatViewItem(item: Row, { index = 0 }: { index: number } = { index: 0 }) {
  return {
    id: item.id ?? index,
    // 左侧图片
    imageUrl: item.imageUrl || '',
    // 头像
    avatarUrl: item.avatarUrl || '',
    // 第一行文字
    title: item.name,
    // 第二行文字
    description: item.introduce,
    // 第一行右上角文字
    note: item.note,
    // vertical: 第三行文字, horizontal: 右侧操作文字
    content: item.content,
    // vertical:第四行操作按钮, horizontal: 右侧操作按钮
    actionRender: (row: Row) => {
      return <div>Click {row.name}</div>
    }
  }
}

export default formatViewItem
