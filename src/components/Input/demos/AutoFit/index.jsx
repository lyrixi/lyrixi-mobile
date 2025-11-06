import React, { useState } from 'react'
import { Page, Divider, Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <Page>
      <Page.Main>
        <Divider>Common</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          style={{ maxHeight: '100px', backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('触发blur')
          }}
        />

        <Divider>Formatter</Divider>
        <Input.AutoFit
          placeholder="AutoFit"
          formatter={(newValue) => {
            return '$' + newValue
          }}
          style={{ backgroundColor: '#f8f8f8' }}
          value={value}
          onChange={setValue}
          allowClear={true}
          onBlur={() => {
            console.log('触发blur')
          }}
        />
      </Page.Main>
    </Page>
  )
}
