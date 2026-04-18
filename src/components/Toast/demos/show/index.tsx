import React from 'react'
import { Page, Toast } from 'lyrixi-mobile'

export default () => {
  function handleToggle() {
    // Toast.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskStyle: { backgroundColor: 'red' }
    // }
    let toast = Toast.show({
      style: { backgroundColor: 'blue', color: 'green' },
      maskStyle: { backgroundColor: 'red' },
      position: 'middle',
      content: 'show toast',
      duration: 2000,
      maskClickable: false,
      onOpen: () => {
        console.log('custom open:', true)
      },
      onClose: () => {
        console.log('custom open:', false)
      }
    })
    console.log(toast)

    setTimeout(() => {
      Toast.show({
        content: 'hh',
        onOpen: () => {
          console.log('hh open:', true)
        },
        onClose: () => {
          console.log('hh open:', false)
        }
      })
    }, 1000)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Toast.show</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Toast open toggle
        </div>
      </Page.Main>
    </Page>
  )
}
