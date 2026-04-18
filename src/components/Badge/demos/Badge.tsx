import React from 'react'
import { Page, Badge } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Badge maxLength={2} ellipsis={'+'}>
          1000
        </Badge>
      </Page.Main>
    </Page>
  )
}
