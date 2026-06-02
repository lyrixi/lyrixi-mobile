import { useState } from 'react'

import { Button, Message, Page } from 'lyrixi-mobile'

export default function MessageHeaderDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Header
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>头部内容</Message.Header>
        <Message.Main>主体</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
