import React, { useEffect, useState } from 'react'
import { Picker, Page } from 'lyrixi-mobile'

import type { PickerDemoRow } from './Picker.demos.types'

export default () => {
  const [list, setList] = useState<PickerDemoRow[]>([])
  const [value, setValue] = useState<unknown>(null)

  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          name: '0507-打印',
          id: '8571532967972181136'
        },
        {
          name: '0507-打印_副本',
          id: '8421508242493921754'
        }
      ])
    }, 3000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Picker.Modal
          open
          value="8571532967972181136"
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
        />
      </Page.Main>
    </Page>
  )
}
