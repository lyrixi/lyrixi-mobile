import React from 'react'
import { Page, Toast, Button } from 'lyrixi-mobile'

export default function ToastOpenDemo() {
  function handleToggle() {
    let toast = Toast.open({
      style: { backgroundColor: 'blue', color: 'green' },
      maskStyle: { backgroundColor: 'red' },
      placement: 'middle',
      content: 'open toast',
      duration: 3000,
      maskClickable: false,
      onOpen: () => {
        console.log('custom open:', true)
      },
      onClose: () => {
        console.log('custom open:', false)
      }
    })
    console.log(toast)
  }

  function handleToggle2() {
    Toast.open({
      content: 'hh',
      onOpen: () => {
        console.log('hh open:', true)
      },
      onClose: () => {
        console.log('hh open:', false)
      }
    })
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Toast.open</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Button block radius="l" style={{ margin: '10px 12px' }} onClick={handleToggle}>
          Custom Toast
        </Button>
        <Button block radius="l" style={{ margin: '10px 12px' }} onClick={handleToggle2}>
          Default Toast
        </Button>
      </Page.Main>
    </Page>
  )
}
