import React, { useRef } from 'react'

import Dropdown from './../Dropdown'
import List from './List'

// 列表下拉
function ToolBarList({
  // Combo Style
  comboColor,
  comboBackgroundColor,
  comboShape,
  comboBorder,
  comboRadius,
  comboSize,
  comboStyle,
  comboClassName,

  // Modal
  portal,
  maskClassName,
  maskStyle,
  modalClassName,
  modalStyle,
  offset,
  left,
  right,

  // Combo Value
  title,
  arrowRender,
  value,
  list,
  onChange
}) {
  const dropdownRef = useRef(null)
  // 修改
  async function handleChange(newValue) {
    if (onChange) {
      let goOn = await onChange(newValue)
      if (goOn === false) return
    }

    // 关闭下拉
    dropdownRef.current?.close?.()
  }

  return (
    <Dropdown
      portal={portal}
      offset={offset}
      left={left}
      right={right}
      comboColor={comboColor}
      comboBackgroundColor={comboBackgroundColor}
      comboShape={comboShape}
      comboBorder={comboBorder}
      comboRadius={comboRadius}
      comboSize={comboSize}
      comboStyle={comboStyle}
      comboClassName={comboClassName}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      modalClassName={modalClassName}
      modalStyle={modalStyle}
      title={title || value?.[0]?.name}
      arrowRender={arrowRender}
      ref={dropdownRef}
    >
      <List value={value} list={list} onChange={handleChange} />
    </Dropdown>
  )
}

// Component Name, for compact
ToolBarList.componentName = 'ToolBar.List'

export default ToolBarList
