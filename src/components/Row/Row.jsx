import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

import Col from './Col'

const Row = forwardRef(({ gutter, className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={DOMUtil.classNames(`row`, className)}>
      {children}
    </div>
  )
})

Row.Col = Col
export default Row
