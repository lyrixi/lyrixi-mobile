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
            显示 Message.Icon
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>
          <Message.Icon className="lyrixi-iconfont-config lyrixi-color-primary" />
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
