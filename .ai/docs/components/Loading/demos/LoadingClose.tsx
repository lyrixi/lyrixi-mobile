import React from 'react'
import { Page, Loading } from 'lyrixi-mobile'

export default function LoadingCloseDemo() {
  function handleToggle() {
    Loading.open()
    setTimeout(() => {
      Loading.close()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.close</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
