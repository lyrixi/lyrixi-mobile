import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default function InputRangeDemo() {
  const [value, setValue] = useState(0)
  return (
    <>
      <Input.Range
        style={{ marginTop: '50px' }}
        value={value}
        // disabled
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
