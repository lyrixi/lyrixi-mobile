import React from 'react'
import { Page, Toast, Button } from 'lyrixi-mobile'

export default () => {
  function handleToggle() {
    let toast = Toast.show({
      style: { backgroundColor: 'blue', color: 'green' },
      maskStyle: { backgroundColor: 'red' },
      position: 'middle',
      content: 'show toast',
      duration: 5000,
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
    Toast.show({
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
      <Page.Header className="lyrixi-text-center">Toast.show</Page.Header>
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
