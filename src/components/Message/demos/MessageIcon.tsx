import React, { useState } from 'react'
import { Button, Icon, Icons, Message, Page } from 'lyrixi-mobile'

export default function MessageIconDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Icon
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>
          <Message.Icon>
            <Icon svg={Icons.Config} size="80" color="primary" />
          </Message.Icon>
          <Message.Title>标题</Message.Title>
        </Message.Header>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
