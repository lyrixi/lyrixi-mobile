import React from 'react'


import type { InputRenderClearParams } from '../types'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil } from 'lyrixi-mobile'
测试使用-end */

import IconClear from './../Icon/Clear'

// 渲染清除按钮
function renderClear({ clearRender, allowClear, value, onClear, onTouchStart }: InputRenderClearParams): React.ReactNode {
  let clearable = !ObjectUtil.isEmpty(value) || typeof value === 'number' ? true : false

  // 自定义渲染清空按钮
  if (typeof clearRender === 'function') {
    let clearNode = clearRender({
      allowClear,
      clearable: clearable,
      onClear: onClear,
      // 解决点击失焦后触发onBlur的问题
      onTouchStart: onTouchStart
    })

    if (clearNode !== undefined) return clearNode
  }

  // 默认渲染
  if (!clearable) return null
  return <IconClear onTouchStart={onTouchStart} onClick={onClear as React.MouseEventHandler<HTMLElement>} />
}

export default renderClear
