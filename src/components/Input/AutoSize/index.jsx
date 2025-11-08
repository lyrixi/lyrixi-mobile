import React, { forwardRef } from 'react'
import InputText from './../Text'

const AutoSize = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="autoSize" />
})

export default AutoSize
