import React, { useState } from 'react'

import { Page, Message, Button, Icon, Icons } from 'lyrixi-mobile'

export default function MessageMainDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Page>
        <Page.Main>
          <Button color="primary" onClick={() => setOpen(true)}>
            Open Message.Main
          </Button>
        </Page.Main>
      </Page>
      <Message.Modal open={open} onClose={() => setOpen(false)}>
        <Message.Main
          iconRender={() => <Icon svg={Icons.Config} size="80" color="primary" />}
          title="Title"
          content="Message.Main renders header, body and footer together."
          buttons={[
            {
              name: 'Close',
              className: 'lyrixi-primary',
              onClick: () => {
                setOpen(false)
                return false
              }
            }
          ]}
          onButtonClick={async (button, e) => {
            const result = button.onClick ? await button.onClick(e) : undefined
            if (result !== false) {
              setOpen(false)
            }
          }}
        />
      </Message.Modal>
    </>
  )
}
