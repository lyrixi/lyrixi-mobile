import React from 'react'
import { Page, Loading } from 'lyrixi-mobile'

export default () => {
  function handleToggle() {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.hide</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
