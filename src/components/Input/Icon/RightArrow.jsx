import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

const RightArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={`lyrixi-input-icon lyrixi-input-icon-right-arrow${
        props.className ? ' ' + props.className : ' lyrixi-right-icon'
      }`}
      ref={ref}
    />
  )
})

export default RightArrow
