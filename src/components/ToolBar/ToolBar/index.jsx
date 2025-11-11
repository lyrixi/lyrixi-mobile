import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const ToolBar = forwardRef(
  (
    {
      // Status
      invert,

      // Style
      className,
      style,

      // Element
      children
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-toolbar', invert ? 'invert' : '', className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default ToolBar
