import React from 'react'

function formatItem(item) {
  return {
    id: item.id,
    // 左侧图片
    imageUrl: item.imageUrl || '',
    // 头像
    avatarUrl: item.avatarUrl || '',
    // 第一行文字
    name: item.name,
    // 第二行文字
    description: item.introduce,
    // 第一行右上角文字
    note: item.note,
    // 第三行文字
    content: item.content,
    // 右侧操作按钮
    actionRender: (item) => {
      return <div>Click {item.name}</div>
    }
  }
}

export default formatItem
