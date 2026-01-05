import React from 'react'
import { Page, Chat } from 'lyrixi-mobile'

export default () => {
  const list = [
    {
      id: '1',
      position: 'left',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      name: '用户A',
      content: '这是一条来自用户A的消息',
      time: new Date()
    },
    {
      id: '2',
      position: 'right',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
      name: '我',
      content: '这是一条我发送的消息',
      time: new Date()
    }
  ]

  return (
    <Page>
      <Page.Main>
        <Chat.List list={list} />
      </Page.Main>
    </Page>
  )
}
