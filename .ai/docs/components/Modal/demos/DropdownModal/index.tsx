import { useState, useRef } from 'react'

import { Page, Modal } from 'lyrixi-mobile'

export default function ModalDropdownModalDemo() {
  const referenceRef = useRef(null)
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">DropdownModal</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div ref={referenceRef} className="demo-title" onClick={handleToggle}>
          DropdownModal open toggle
        </div>
        <Modal.DropdownModal
          open={open}
          onClose={() => setOpen(false)}
          referenceElement={referenceRef.current}
        >
          <div style={{ height: '150px' }}>Content</div>
        </Modal.DropdownModal>
      </Page.Main>
    </Page>
  )
}
