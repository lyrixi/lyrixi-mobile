import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

const Clear = forwardRef(({ name, size, ...props }, ref) => {
  return (
    <Icon
      {...props}
      className={`lyrixi-input-icon lyrixi-input-icon-clear${
        props.className ? ' ' + props.className : ' lyrixi-right-icon'
      }`}
      ref={ref}
    />
  )
})

export default Clear
