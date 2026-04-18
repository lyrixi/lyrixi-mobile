import React, { useState } from 'react'
import { Page, Cascader } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState(null)

  return (
    <Page>
      <Page.Main>
        <Cascader.DistrictMain
          value={value}
          onChange={(newValue) => {
            console.log('修改: ', newValue)
            setValue(newValue)
          }}
          placeholder={'DistrictMain'}
          allowClear
          maskStyle={{ zIndex: '9' }}
        />
      </Page.Main>
    </Page>
  )
}
