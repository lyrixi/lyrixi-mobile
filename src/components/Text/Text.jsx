import React, { forwardRef } from 'react'
import Base from './Base'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Text = forwardRef(
  (
    {
      // Value & Display Value
      highlight,
      ellipsis,
      // Style
      color,
      fontSize,
      fontWeight,
      style,
      className,
      // Element
      children
    },
    ref
  ) => {
    return (
      <Base
        ref={ref}
        // Value & Display Value
        highlight={highlight}
        ellipsis={ellipsis}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-text', className)}
      >
        {children}
      </Base>
    )
  }
)

export default Text
