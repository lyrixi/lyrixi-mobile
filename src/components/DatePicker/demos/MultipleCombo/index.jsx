import React, { useState } from 'react'
import { DatePicker, Toast } from 'lyrixi-mobile'

export default () => {
  const [mulValue, setMulValue] = useState([
    {
      id: 'start',
      description: 'Start',
      value: new Date()
      // disabled: true
    },
    {
      id: 'middle',
      description: 'Middle',
      value: new Date()
    },
    {
      id: 'end',
      description: 'End',
      value: new Date()
    }
  ])

  return (
    <>
      <DatePicker.MultipleCombo
        placeholder="Please select MultipleCombo"
        value={mulValue}
        // year | quarter | month | date | time | datetime | week
        type="datetime"
        onChange={(newValue) => {
          console.log(newValue)
          setMulValue(newValue)
        }}
        // title="选择日期"
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
        allowClear
        min={new Date()}
        hourStep={5}
        minuteStep={5}
        onOk={(newValue) => {
          Toast.show({ content: 'validate failed' })
          return false
        }}
      />
    </>
  )
}
