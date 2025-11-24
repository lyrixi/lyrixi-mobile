import React from 'react'

function formatViewItem(item) {
  return {
    id: item.id,
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
    actionRender: (item) => {
      return <div>Click {item.name}</div>
    }
  }
}

export default formatViewItem
