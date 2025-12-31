import React from 'react'
import { Page, Loading } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Loading.SpinFade>
          {/* Loading.SpinFade 示例内容 */}
        </Loading.SpinFade>
      </Page.Main>
    </Page>
  )
}
