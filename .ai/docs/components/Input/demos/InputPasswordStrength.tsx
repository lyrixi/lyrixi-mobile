import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputPasswordStrengthDemo() {
  const [value] = useState('abcdefgAbcd$')
  return (
    <>
      <Input.PasswordStrength value={value} />
    </>
  )
}
