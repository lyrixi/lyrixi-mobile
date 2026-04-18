import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Password
        placeholder="Select"
        value={value}
        allowClear
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
