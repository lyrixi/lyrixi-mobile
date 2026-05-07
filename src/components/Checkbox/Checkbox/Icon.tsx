import React from 'react'


import type { CheckboxIconProps } from './../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function Icon({ checked, variant = 'solid' }: CheckboxIconProps) {
  return (
    <span
      className={DOMUtil.classNames(
        'lyrixi-checkbox-icon',
        `lyrixi-checkbox-icon-${variant}`,
        checked ? 'lyrixi-checked' : ''
      )}
    />
  )
}

export default Icon
