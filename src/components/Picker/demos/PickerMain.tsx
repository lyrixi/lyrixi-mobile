import React, { useState } from 'react'
import { Picker, Page } from 'lyrixi-mobile'
import type { PickerColumnItem } from '../types'

export default () => {
  const list: PickerColumnItem[] = [
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ]
  const [value, setValue] = useState<PickerColumnItem[] | null>(null)
  return (
    <Page>
      <Page.Main>
        <Picker.Main
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
