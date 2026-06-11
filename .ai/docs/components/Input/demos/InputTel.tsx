import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default function InputTelDemo() {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Tel
        value={value}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
