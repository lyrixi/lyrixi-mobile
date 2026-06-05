import React, { useState } from 'react'
import { Page, Message, Button, Icon, Icons } from 'lyrixi-mobile'

export default function MessageModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Page>
        <Page.Main>
          <Button className="lyrixi-flex" color="primary" onClick={() => setOpen(true)}>
            Open Message.Modal
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal
        open={open}
        onClose={() => setOpen(false)}
        iconRender={() => <Icon svg={Icons.Config} size="80" color="primary" />}
        title="Title"
        content="Content"
        buttonsLayout="vertical"
        buttons={[
          {
            name: 'Button1',
            onClick: () => true
          },
          {
            name: 'Button2',
            className: 'lyrixi-primary',
            onClick: () => true
          }
        ]}
      />
    </>
  )
}
