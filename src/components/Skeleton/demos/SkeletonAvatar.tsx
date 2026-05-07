import React from 'react'
import { Page, Skeleton } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Avatar animated />
      </Page.Main>
    </Page>
  )
}
