import React, { forwardRef } from 'react'

// 内库使用-start
import Icon from './../../Icon'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

const Clear = forwardRef(
  (
    {
      name,
      size,
      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Icon
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-input-icon lyrixi-input-icon-clear',
          className || 'lyrixi-right-icon'
        )}
        ref={ref}
      />
    )
  }
)

export default Clear
