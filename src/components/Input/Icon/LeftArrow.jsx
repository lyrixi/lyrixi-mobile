import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

const IconLeftArrow = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={`lyrixi-input-icon lyrixi-input-icon-left-arrow${
        props.className ? ' ' + props.className : ' lyrixi-left-icon'
      }`}
      ref={ref}
    />
  )
})

export default IconLeftArrow
