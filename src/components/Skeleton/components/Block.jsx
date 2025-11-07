import React, { forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

const Block = (
  {
    animated = true, // 其它属性
    className,
    ...props
  },
  ref
) => {
  return (
    <div
      ref={ref}
      {...props}
      className={DOMUtil.classNames('lyrixi-skeleton-block', animated ? 'animated' : '', className)}
    ></div>
  )
}

export default forwardRef(Block)
