import React from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Skeleton from 'lyrixi-mobile/components/Skeleton'

export default () => {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Avatar animated />
      </Page.Main>
    </Page>
  )
}
