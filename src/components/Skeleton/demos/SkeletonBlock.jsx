import React from 'react'
import Page from 'lyrixi-mobile/components/Page'
import Skeleton from 'lyrixi-mobile/components/Skeleton'

export default () => {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Block
          // Status
          animated={true}
          // Style
          className={'lyrixi-skeleton-avatar'}
        />
        <Skeleton.Block
          // Status
          animated={true}
          // Style
          className={'lyrixi-skeleton-title'}
        />
        <Skeleton.Block
          // Status
          animated={true}
          // Style
          className={'lyrixi-skeleton-item'}
        />
      </Page.Main>
    </Page>
  )
}
