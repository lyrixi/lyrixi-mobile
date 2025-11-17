import React, { useEffect, useState } from 'react'
import { Signature, Page, Toast, Device, Bridge } from 'lyrixi-mobile'

// Test safe area
// import { SafeArea } from 'lyrixi-mobile'
// SafeArea.debug()

export default () => {
  const [value, setValue] = useState(
    'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
  )

  useEffect(() => {
    Bridge.load()
  }, [])

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">手写签名</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Combo
          // color="#000000"
          // backgroundColor="white"
          // disabled={true}
          value={value}
          safeArea="auto"
          onChange={(newVal) => {
            console.log(newVal)
            setValue(newVal)
          }}
        />
      </Page.Main>
    </Page>
  )
}
