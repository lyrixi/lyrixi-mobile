import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Block = (
  {
    // Status
    animated = true,

    // Style
    className,
    style
  },
  ref
) => {
  return (
    <div
      ref={ref}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-skeleton-block', animated ? 'animated' : '', className)}
    ></div>
  )
}

export default forwardRef(Block)
