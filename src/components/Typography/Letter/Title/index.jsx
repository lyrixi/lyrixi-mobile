import React, { forwardRef } from 'react'
import Base from './../Base'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

const Text = forwardRef(
  (
    {
      // 样式
      className,

      children,
      ...props
    },
    ref
  ) => {
    return (
      <Base
        {...props}
        className={DOMUtil.classNames('lyrixi-typography-title', className)}
        ref={ref}
      >
        {children}
      </Base>
    )
  }
)

export default Text
