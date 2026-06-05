import React, { useState } from 'react'

import { Page, Modal } from 'lyrixi-mobile'

export default function ModalNavBarModalDemo() {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  function handleOk() {
    console.log('确定按钮被点击')
    setOpen(false)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">NavBarModal</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          NavBarModal open toggle
        </div>
        <Modal.NavBarModal
          cancelPosition="right"
          open={open}
          onClose={() => setOpen(false)}
          title="Title"
          okNode="Ok"
          // cancel="Cancel"
          onOk={handleOk}
        // onCancel={handleCancel}
        >
          <div style={{ height: '300px', width: '300px' }}>Content</div>
        </Modal.NavBarModal>
      </Page.Main>
    </Page>
  )
}
