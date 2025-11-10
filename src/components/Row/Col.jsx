import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

const Col = forwardRef(
  (
    {
      // Style
      span,
      style,
      className,

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
        className={DOMUtil.classNames('lyrixi-col', `lyrixi-col-${span || 0}`, className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Col
