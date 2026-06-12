import React from 'react'
import { Page } from 'lyrixi-mobile'
import { Loading } from 'lyrixi-mobile'

export default function LoadingOpenDemo() {
  function handleToggle() {
    // Loading.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskStyle: { backgroundColor: 'red' }
    // }

    let loading = Loading.open({
      style: { backgroundColor: 'blue' },
      maskStyle: { backgroundColor: 'red' },
      className: 'abc',
      content: '自定义加载'
    })
    console.log(loading)
    setTimeout(() => {
      Loading.open()
    }, 3000)
    setTimeout(() => {
      Loading.close()
    }, 6000)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.open</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
