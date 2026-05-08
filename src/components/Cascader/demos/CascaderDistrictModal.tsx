import React, { useState } from 'react'
import { Page, Cascader, type CascaderNode } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState<CascaderNode[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Cascader.DistrictModal
          open
          value={value}
          onChange={(newValue) => {
            console.log('修改: ', newValue)
            setValue(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
