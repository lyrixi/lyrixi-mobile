import React from 'react'

import type { InputTextRenderClearOptions } from './Input.Text.renderClear.types'
import IconClear from './../Icon/Clear'

// 渲染清除按钮
function renderClear({
  clearRender,
  allowClear,
  clearable = false,
  onClear,
  onTouchStart
}: InputTextRenderClearOptions): React.ReactNode {
  // 自定义渲染清空按钮
  if (typeof clearRender === 'function') {
    let clearNode = clearRender({
      clearable,
      allowClear,
      onClear: onClear,
      // 解决点击失焦后触发onBlur的问题
      onTouchStart: onTouchStart
    })

    if (clearNode !== undefined) return clearNode
  }

  // 默认渲染
  if (!clearable) return null
  return <IconClear onTouchStart={onTouchStart} onClick={onClear} />
}

export default renderClear
