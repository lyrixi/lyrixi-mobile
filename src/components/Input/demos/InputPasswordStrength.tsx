import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default function InputPasswordStrengthDemo() {
  const [value, setValue] = useState('')

  return (
    <>
      <Input.Password
        placeholder="Please input password"
        value={value}
        allowClear
        onChange={(val) => {
          setValue(val)
        }}
      />
      <Input.PasswordStrength value={value} style={{ marginTop: 8 }} />
    </>
  )
}
