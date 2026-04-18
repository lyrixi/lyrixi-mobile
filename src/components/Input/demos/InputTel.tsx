import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
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
