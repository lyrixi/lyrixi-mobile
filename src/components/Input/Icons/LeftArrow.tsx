import React, { forwardRef } from 'react'

import type { InputIconProps } from '../types/Input.Icon.types'

// 内库使用-start
import Icons from '../../../icons'
import InputIcon from './../Icon'
import type { IconRef } from './../../Icon/types'
// 内库使用-end

/* 测试使用-start
import { Icons } from 'lyrixi-mobile'
import InputIcon from './../Icon'
测试使用-end */

const IconLeftArrow = forwardRef<
  IconRef,
  Omit<InputIconProps, 'svg'> & Pick<Partial<InputIconProps>, 'svg'>
>(function IconLeftArrow({ svg = Icons.ArrowLeft, ...rest }, ref) {
  return <InputIcon ref={ref} svg={svg} {...rest} />
})

export default IconLeftArrow
