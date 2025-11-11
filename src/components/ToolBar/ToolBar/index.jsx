import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const ToolBar = forwardRef(({ invert, className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      style={style}
      className={DOMUtil.classNames('lyrixi-toolbar', invert ? 'invert' : '', className)}
    >
      {children}
    </div>
  )
})

export default ToolBar
