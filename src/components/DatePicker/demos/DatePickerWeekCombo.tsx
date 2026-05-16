import React, { useRef, useState } from 'react'
import { DatePicker } from 'lyrixi-mobile'

import type { DatePickerDemoWeekComboRef } from './DatePicker.demos.types'

export default () => {
  const date1Ref = useRef<DatePickerDemoWeekComboRef | null>(null)
  const date2Ref = useRef<DatePickerDemoWeekComboRef | null>(null)
  const [value, setValue] = useState<Date | null>(null)

  return (
    <>
      <DatePicker.WeekCombo
        ref={date1Ref}
        className="lyrixi-border-b"
        placeholder="Please select WeekCombo"
        type="datetime"
        allowClear
        onBeforeOpen={() => {
          if (document.querySelector('.lyrixi-mask.lyrixi-active')) {
            date1Ref.current?.close?.()
            date2Ref.current?.close?.()
            return false
          }
          return true
        }}
        maskStyle={{
          zIndex: 999
        }}
        onChange={(newValue) => {
          setValue(newValue as Date | null)
        }}
        value={value}
      />
    </>
  )
}
