import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Block = ({ animated = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={DOMUtil.classNames('lyrixi-skeleton-block', animated ? 'animated' : '', props.className)}
    ></div>
  )
}

export default forwardRef(Block)
