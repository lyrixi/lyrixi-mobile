import React, { useState, useRef } from 'react'
import { Page, Modal, Button } from 'lyrixi-mobile'

export default () => {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Modal</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Modal open toggle
        </div>
        <Modal open={open} onClose={() => setOpen(false)} animation="zoom" maskClosable={true}>
          <div className="lyrixi-bg-white" style={{ height: '300px', width: '300px' }}>
            Content
          </div>
        </Modal>
      </Page.Main>
    </Page>
  )
}
