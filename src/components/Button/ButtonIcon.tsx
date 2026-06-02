import React, { forwardRef } from 'react'

import type { IconRef } from './../Icon/types'

import type { ButtonIconProps } from './types'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

const ButtonIcon = forwardRef<IconRef, ButtonIconProps>(function ButtonIcon(
  { svg, color, backgroundColor, size = 'm', radius, style, className },
  ref
) {
  return (
    <Icon
      ref={ref}
      svg={svg}
      color={color}
      backgroundColor={backgroundColor}
      size={size}
      radius={radius}
      style={style}
      className={(DOMUtil.classNames as (...args: unknown[]) => string)(
        'lyrixi-button-icon',
        className
      )}
    />
  )
})

export default ButtonIcon
