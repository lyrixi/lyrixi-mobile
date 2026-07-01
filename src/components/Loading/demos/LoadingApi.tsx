import React from 'react'
import { Page, Loading, Button, Toast } from 'lyrixi-mobile'

export default function LoadingApiDemo() {
  const handleOpenDefault = () => {
    Loading.open()
  }

  const handleOpenContent = () => {
    Loading.open({
      content: 'Loading...'
    })
  }

  const handleOpenCustomStyle = () => {
    Loading.open({
      content: 'Custom style',
      className: 'demo-loading-custom',
      style: { backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', borderRadius: '8px' },
      maskClassName: 'demo-loading-mask',
      maskStyle: { backgroundColor: 'rgba(0, 0, 0, 0.6)' }
    })
  }

  const handleOpenOnOpen = () => {
    Loading.open({
      content: 'Check console',
      onOpen: () => {
        console.log('Loading opened')
      }
    })
  }

  const handleClose = () => {
    Loading.close()
  }

  const handleOpenLongThenClose = () => {
    Loading.open({ content: 'Will close in 1s' })
    setTimeout(() => {
      Loading.close()
    }, 1000)
  }

  const handleOpenReplace = () => {
    Loading.open({ content: 'First Loading' })
    setTimeout(() => {
      Loading.open({ content: 'Updated Loading' })
    }, 2000)
  }

  const handleCheckExists = () => {
    const result = Loading.exists()
    Toast.open({
      content: result ? 'Loading exists' : 'Loading not exists',
      duration: 1000
    })
  }

  return (
    <Page>
      <Page.Main>
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button className="lyrixi-flex" color="primary" onClick={handleOpenDefault}>
            Open Default Loading
          </Button>

          <Button className="lyrixi-flex" color="info" onClick={handleOpenContent}>
            Open Loading (content)
          </Button>

          <Button className="lyrixi-flex" color="info" onClick={handleOpenCustomStyle}>
            Open Loading (custom style)
          </Button>

          <Button className="lyrixi-flex" color="default" onClick={handleOpenOnOpen}>
            Open Loading (onOpen)
          </Button>

          <Button className="lyrixi-flex" color="danger" onClick={handleClose}>
            Close Current Loading
          </Button>

          <Button className="lyrixi-flex" color="warning" onClick={handleOpenLongThenClose}>
            Open Loading, Close in 1s
          </Button>

          <Button className="lyrixi-flex" color="primary" onClick={handleOpenReplace}>
            Open Loading (update after 2s)
          </Button>

          <Button className="lyrixi-flex" color="default" onClick={handleCheckExists}>
            Check Loading.exists()
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
