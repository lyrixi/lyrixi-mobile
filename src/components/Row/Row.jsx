import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import Col from './Col'

const Row = forwardRef(
  (
    {
      // Style
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
        className={DOMUtil.classNames('lyrixi-row', className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

Row.Col = Col
export default Row
