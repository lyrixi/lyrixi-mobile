import { useState } from 'react'

import { Input } from 'lyrixi-mobile'

export default function InputTextareaDemo() {
  const [value, setValue] = useState('')
  return (
    <>
      <Input.Textarea
        value={value}
        allowClear
        formatter={(newValue: string) => {
          return '$' + newValue
        }}
        style={{ backgroundColor: '#f8f8f8' }}
        onChange={(val) => {
          console.log(val)
          setValue(val)
        }}
      />
    </>
  )
}
