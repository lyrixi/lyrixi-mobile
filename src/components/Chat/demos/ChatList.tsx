import React from 'react'
import { Page, Chat } from 'lyrixi-mobile'
import type { ChatRawItem } from './../List/types'

export default () => {
  const list = [
    {
      id: '1',
      position: 'left',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      name: '用户A',
      content: '这是一条来自用户A的消息',
      time: new Date()
    },
    {
      id: '2',
      position: 'right',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      name: '我',
      content: '这是一条我发送的消息',
      time: new Date()
    }
  ]

  // 使用 formatViewItem 格式化单个项
  // 注意：formatViewItem 和 formatViewList 只需要使用其中一个
  function formatViewItem(item: ChatRawItem, { index }: { index: number }): ChatRawItem {
    return {
      ...item,
      authorNode: (typeof item.name === 'string' ? item.name : null) || `用户${index + 1}`
    }
  }

  // 或者使用 formatViewList 格式化整个列表
  // function formatViewList(list) {
  //   return list.map((item) => ({
  //     ...item,
  //     authorNode: item.name || '未知用户'
  //   }))
  // }

  return (
    <Page>
      <Page.Main>
        <Chat.List list={list} formatViewItem={formatViewItem} />
      </Page.Main>
    </Page>
  )
}
