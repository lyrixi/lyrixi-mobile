import React from 'react'
import { Page, ToolBar } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <ToolBar.Search placeholder="Search" value="" onSearch={() => {}} />
      </Page.Main>
    </Page>
  )
}
