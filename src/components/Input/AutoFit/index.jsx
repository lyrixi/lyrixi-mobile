import React, { forwardRef } from 'react'
import InputText from './../Text'

const AutoFit = forwardRef(({ ...props }, ref) => {
  return <InputText ref={ref} {...props} type="autoFit" />
})

export default AutoFit
