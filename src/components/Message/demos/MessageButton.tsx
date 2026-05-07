import React, { useState } from 'react'
import { Button, Message, Page } from 'lyrixi-mobile'

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            显示 Message.Button
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main>内容</Message.Main>
        <Message.Footer>
          <Message.Button block onClick={() => setOpen(false)}>Message.Button 示例</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
