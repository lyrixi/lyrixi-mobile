import React, { useState } from 'react'
import { Button, Message, Page } from 'lyrixi-mobile'

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Footer
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>取消</Message.Button>
          <Message.Button color="primary" onClick={() => setOpen(false)}>确定</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
