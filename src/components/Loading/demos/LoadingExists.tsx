import React, { useState } from 'react'
import { Page, Loading, Button, Toast } from 'lyrixi-mobile'

export default () => {
  const [exists, setExists] = useState(false)

  function handleShow() {
    Loading.show({ content: 'Loading...' })
    setTimeout(() => {
      Loading.hide()
    }, 5000)
    checkExists()
  }

  function handleHide() {
    Loading.hide()
    checkExists()
  }

  function checkExists() {
    const result = Loading.exists()
    setExists(result)
    Toast.show({ content: result ? 'Loading exists' : 'Loading not exists', duration: 1000 })
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.exists</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: '8px' }}>
              Current Status: {exists ? 'exists' : 'not exists'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button onClick={handleShow}>Show Loading</Button>
            <Button onClick={handleHide}>Hide Loading</Button>
            <Button onClick={checkExists}>Check Exists</Button>
          </div>
        </div>
      </Page.Main>
    </Page>
  )
}
