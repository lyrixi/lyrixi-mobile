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
            显示 Message.Main
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main>Message.Main 主体内容示例</Message.Main>
        <Message.Footer>
          <Message.Button onClick={() => setOpen(false)}>关闭</Message.Button>
        </Message.Footer>
      </Message.Modal>
    </>
  )
}
