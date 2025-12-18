import React, { useEffect, useRef, useState } from 'react'
import { DatePicker } from 'lyrixi-mobile'

export default () => {
  const date1Ref = useRef(null)
  const date2Ref = useRef(null)
  const [value, setValue] = useState(null)

  useEffect(() => {
    date1Ref.current.open()
  }, [])

  return (
    <>
      <DatePicker.WeekCombo
        ref={date1Ref}
        className="lyrixi-border-b"
        placeholder="Please select WeekCombo"
        type="datetime"
        allowClear
        // min={new Date()}
        // max={new Date()}
        // maskClosable={false}
        onBeforeOpen={() => {
          if (document.querySelector('.lyrixi-mask.lyrixi-active')) {
            date1Ref.current.close()
            date2Ref.current.close()
            return false
          }
          return true
        }}
        onClose={() => {
          console.log('onClose')
        }}
        onOpen={() => {
          console.log('onOpen')
        }}
        maskStyle={{
          zIndex: 999
        }}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        value={value || new Date('2022-08-22 00:00')}
      />
    </>
  )
}
