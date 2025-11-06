import React, { forwardRef } from 'react'
import CommonForm from './Form'
import VirtualForm from './VirtualForm'

// layout: horizontal | vertical | inline
const Form = forwardRef(({ virtual, ...props }, ref) => {
  // virtual模式下, 使用IntersectionObserver来监听表单项的可见性, 所以无需要传入height
  if (virtual) {
    return <VirtualForm ref={ref} {...props} />
  }
  return <CommonForm ref={ref} {...props} />
})

export default Form
