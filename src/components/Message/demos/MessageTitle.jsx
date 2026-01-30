import React, { useState } from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Message from 'lyrixi-mobile/components/Message'
import Button from 'lyrixi-mobile/components/Button'

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Title
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>
          <Message.Title>Message.Title 标题示例</Message.Title>
        </Message.Header>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
