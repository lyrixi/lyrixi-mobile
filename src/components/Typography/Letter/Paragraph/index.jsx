import React, { forwardRef } from 'react'
import Base from './../Base'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

const Text = forwardRef(
  (
    {
      children, // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Base
        {...props}
        className={DOMUtil.classNames('lyrixi-typography-paragraph', className)}
        ref={ref}
      >
        {children}
      </Base>
    )
  }
)

export default Text
