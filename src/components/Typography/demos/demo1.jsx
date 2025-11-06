import React from 'react'
import { Page, Typography } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        {Typography.getDisplayValue([
          { id: 'option1', name: 'Option1' },
          { id: 'option2', name: 'Option2' }
        ])}
        <Typography.Amount currencySymbol="¥">1111111.11111</Typography.Amount>
      </Page.Main>
    </Page>
  )
}
