import React from 'react'
import { Page, Icon } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <p>Don't use lyrixi-iconfont, cause that className often changes</p>
        <Icon className="lyrixi-iconfont lyrixi-iconfont-signature" size={100}></Icon>
      </Page.Main>
    </Page>
  )
}
