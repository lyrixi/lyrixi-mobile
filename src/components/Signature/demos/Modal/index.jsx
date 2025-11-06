import React, { useRef, useState } from 'react'
import { Signature, Page } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">手写签名</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Modal
          open={true}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Page.Main>
    </Page>
  )
}
