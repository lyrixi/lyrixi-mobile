import React from 'react'
import { Page, NoticeBar } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <NoticeBar type="info" title="NoticeBar" />
      </Page.Main>
    </Page>
  )
}
