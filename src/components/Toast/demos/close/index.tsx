import React from 'react'
import { Page, Toast } from 'lyrixi-mobile'

export default function ToastCloseDemo() {
  function handleToggle() {
    Toast.open({
      duration: 1000000,
      content: 'open toast',
      onOpen: () => {
        console.log('open:', true)
      },
      onClose: () => {
        console.log('open:', false)
      }
    })
    setTimeout(() => {
      Toast.close()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Toast.close</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Toast open toggle
        </div>
      </Page.Main>
    </Page>
  )
}
