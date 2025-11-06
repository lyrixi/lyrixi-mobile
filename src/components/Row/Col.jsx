import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

const Col = forwardRef(({ span, className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={DOMUtil.classNames('lyrixi-col', `lyrixi-col-${span || 0}`, className)}
    >
      {children}
    </div>
  )
})

export default Col
