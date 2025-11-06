import React from 'react'
import { Page, Icon } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <p>Don't use lyrixi-icons, cause that className often changes</p>
        <Icon className="lyrixi-icons lyrixi-icon-signature" size={100}></Icon>
      </Page.Main>
    </Page>
  )
}
