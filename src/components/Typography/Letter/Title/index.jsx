import React, { forwardRef } from 'react'
import Base from './../Base'

const Text = forwardRef(({ children, ...props }, ref) => {
  return (
    <Base
      {...props}
      className={`lyrixi-typography-title${props.className ? ' ' + props.className : ''}`}
      ref={ref}
    >
      {children}
    </Base>
  )
})

export default Text
