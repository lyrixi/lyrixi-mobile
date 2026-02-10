import _ from 'lodash'
import React from 'react'
import IconClear from './../Icon/Clear'

// 渲染清除按钮
function getClearNode({ clearRender, allowClear, value, onClear, onTouchStart }) {
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
  return <IconClear onTouchStart={onTouchStart} onClick={onClear} />
}

export default getClearNode
