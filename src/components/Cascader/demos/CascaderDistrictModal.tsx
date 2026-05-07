import React, { useState } from 'react'
import { Page, Cascader } from 'lyrixi-mobile'
import type { CascaderNode } from './../types'

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
