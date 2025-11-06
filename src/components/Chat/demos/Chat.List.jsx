import React from 'react'
import { Page, Chat } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Chat.List
          // checkable
          list={[
            {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?lyrixi=3',
              id: '1',
              name: '1',
              content: 'content',
              position: 'left',
              time: new Date()
            },
            {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?lyrixi=3',
              id: '2',
              name: '张三',
              content: 'content',
              position: 'right',
              time: new Date()
            },
            {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?lyrixi=3',
              id: '3',
              name: '张三',
              content: 'content',
              position: 'right',
              time: new Date('2025-08-08')
            }
          ]}
        />
      </Page.Main>
    </Page>
  )
}
