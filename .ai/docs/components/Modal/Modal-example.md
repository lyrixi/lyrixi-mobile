# Modal Example

以下示例位于本目录 `demos/`（由 `src/components/Modal/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Modal } from 'lyrixi-mobile'`

## demos/Modal/index.tsx

```tsx
import { useState } from 'react'

import { Page, Modal } from 'lyrixi-mobile'

export default function ModalDemo2() {
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
```

## demos/NavBarModal/index.tsx

```tsx
import { useState } from 'react'

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
```

## demos/DropdownModal/index.tsx

```tsx
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
```

## demos/FilterModal/index.tsx

```tsx
import { useState, useRef } from 'react'

import { Icon, Page, Modal, FooterBar, Icons } from 'lyrixi-mobile'

export default function ModalFilterModalDemo() {
  const modalRef = useRef(null)
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">FilterModal</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          FilterModal open toggle
        </div>
        <Modal.FilterModal
          ref={modalRef}
          open={open}
          onClose={() => setOpen(false)}
          footerRender={({ onClose }) => (
            <Page.Footer>
              <FooterBar>
                <FooterBar.Button
                  style={{ padding: 0 }}
                  direction="vertical"
                  fontSize="12px"
                  onClick={() => {
                    console.log('setting')
                  }}
                >
                  <Icon svg={Icons.Config} />
                  Setting
                </FooterBar.Button>
                <FooterBar.Button
                  className="lyrixi-flex-1"
                  backgroundColor="default"
                  onClick={() => {
                    console.log('reset')
                  }}
                >
                  Reset
                </FooterBar.Button>
                <FooterBar.Button
                  className="lyrixi-flex-1"
                  color="white"
                  backgroundColor="primary"
                  onClick={() => {
                    console.log('confirm')
                    onClose?.()
                  }}
                >
                  Ok
                </FooterBar.Button>
              </FooterBar>
            </Page.Footer>
          )}
        >
          <div style={{ height: '300px' }}>Content</div>
        </Modal.FilterModal>
      </Page.Main>
    </Page>
  )
}
```
