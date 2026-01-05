import React from 'react'
import { Page, Chat } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Chat.Item
          avatarUrl="https://api.dicebear.com/7.x/miniavs/svg"
          authorNode="用户名"
          content="这是一条聊天消息内容"
          position="left"
        />
      </Page.Main>
    </Page>
  )
}
