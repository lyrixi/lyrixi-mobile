import React, { useState } from 'react'
import { Input } from 'lyrixi-mobile'

export default () => {
  const [value] = useState('abcdefgAbcd$')
  return (
    <>
      <Input.PasswordStrength value={value} />
    </>
  )
}
