import React, { forwardRef } from 'react'

const ToolBar = forwardRef(({ invert, className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`lyrixi-toolbar${invert ? ' invert' : ''}${className ? ' ' + className : ''}`}
    >
      {children}
    </div>
  )
})

export default ToolBar
