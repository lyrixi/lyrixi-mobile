import React, { forwardRef } from 'react'
import type { InputIconClearProps } from '../types/Input.IconClear.types'

// 内库使用-start
import Icons from '../../../icons'
import Icon from './../../Icon'
import type { IconRef } from './../../Icon/types'
import DOMUtil from './../../../utils/DOMUtil'

// 内库使用-end

/* 测试使用-start
import { Icon, Icons } from 'lyrixi-mobile'
测试使用-end */

const IconClear = forwardRef<IconRef, InputIconClearProps>(
  (
    {
      // Value & Display Value
      svg = Icons.CircleCloseFill,
      // Status
      disabled,
      // Value & Display Value
      color,
      backgroundColor,
      size = 'm',
      radius,
      // Style
      style,
      iconClassName,
      // Events
      onClick,
      onTouchStart
    },
    ref
  ) => {
    return (
      <Icon
        ref={ref}
        svg={svg}
        disabled={disabled}
        color={color}
        backgroundColor={backgroundColor}
        size={size}
        radius={radius}
        style={style}
        className={DOMUtil.classNames('lyrixi-input-icon', 'lyrixi-right-icon', iconClassName)}
        onClick={onClick}
        onTouchStart={onTouchStart}
      />
    )
  }
)

export default IconClear
