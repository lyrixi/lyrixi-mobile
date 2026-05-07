import React from 'react'
import { Page, Skeleton } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Skeleton.Paragraph length={3} />
      </Page.Main>
    </Page>
  )
}
