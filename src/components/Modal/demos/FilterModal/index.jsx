import React, { useState, useRef } from 'react'
import { Icon, Page, Modal, FooterBar, Button } from 'lyrixi-mobile'

export default () => {
  const referenceRef = useRef(null)
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
          footerRender={({ close }) => (
            <Page.Footer>
              <FooterBar>
                <FooterBar.Button
                  iconClassName="lyrixi-iconfont-config"
                  style={{ padding: 0 }}
                  onClick={() => {
                    console.log('setting')
                  }}
                >
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
                    close()
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
