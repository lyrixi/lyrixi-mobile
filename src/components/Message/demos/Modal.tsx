import React, { useState, useEffect } from 'react'
import { Page, Message, Button } from 'lyrixi-mobile'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Page>
        <Page.Main>
          <Button className="lyrixi-flex" color="primary" onClick={() => setOpen(true)}>
            Click to show message
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Header>
          <Message.Icon className="lyrixi-iconfont-config lyrixi-color-primary" />
          <Message.Title>Title</Message.Title>
        </Message.Header>
        <Message.Main>Content</Message.Main>
        <Message.Footer>
          <Message.Button block backgroundColor="default" onClick={() => setOpen(false)}>Button1</Message.Button>
          <Message.Button block backgroundColor="primary" color="white" onClick={() => setOpen(false)}>
            Button2
          </Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
