import React from 'react'
import { Page, Chat } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Chat.Item
          avatar={'https://api.dicebear.com/7.x/miniavs/svg'}
          id="1"
          name="1"
          content="content"
          position="left"
          time={new Date()}
        />
      </Page.Main>
    </Page>
  )
}
