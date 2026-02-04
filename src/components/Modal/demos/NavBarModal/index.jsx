import React, { useState, useRef } from 'react'
import { Page, Modal, Button, Input } from 'lyrixi-mobile'

export default () => {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  function handleOk({ close }) {
    console.log('确定按钮被点击')
    close()
  }

  function handleCancel() {
    console.log('取消按钮被点击')
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
          ok="Ok"
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
