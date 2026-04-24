import React, { useEffect, useRef, useState } from 'react'
import { Picker, Page } from 'lyrixi-mobile'
import type { PickerComboRef } from './../types'

type PickerRow = { id: string; name: string }

export default () => {
  const pickerRef = useRef<PickerComboRef | null>(null)
  const [list, setList] = useState<PickerRow[]>([])
  const [value, setValue] = useState<unknown>(null)
  useEffect(() => {
    setTimeout(() => {
      console.log('pickerRef:', pickerRef)
      setList([
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
        { id: '9', name: '9' },
        { id: '10', name: '10' }
      ])
      setValue([{ id: '2', name: '2' }])
    }, 2000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Picker.Combo
          ref={pickerRef}
          allowClear
          safeArea
          title="标题"
          cancelNode={null}
          okNode=""
          placeholder="Please select"
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
