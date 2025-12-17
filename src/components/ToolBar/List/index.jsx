import React, { useRef } from 'react'

import Dropdown from './../Dropdown'
import List from './List'

// 列表下拉
function ToolBarList({
  // Value & Display Value
  value,
  placeholder = '',

  // Style
  style,
  className,
  color,
  borderColor,
  backgroundColor,
  sizeEqual,
  border = 'none',
  radius,
  size,
  maskStyle,
  maskClassName,
  modalStyle,
  modalClassName,
  offset,
  left,
  right,
  list,

  // Element
  comboRender,
  comboChildren,
  arrowRender,
  portal,

  // Events
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
      ref={dropdownRef}
      // Value & Display Value
      placeholder={placeholder}
      // Style
      style={style}
      className={className}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      sizeEqual={sizeEqual}
      border={border}
      radius={radius}
      size={size}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      modalStyle={modalStyle}
      modalClassName={modalClassName}
      // Element
      comboRender={comboRender}
      comboChildren={comboChildren || value?.name || placeholder}
      arrowRender={arrowRender}
      portal={portal}
      offset={offset}
      left={left}
      right={right}
    >
      {/* Element: List */}
      <List
        // Value & Display Value
        value={value}
        // Element
        list={list}
        // Events
        onChange={handleChange}
      />
    </Dropdown>
  )
}

// Component Name, for compact
ToolBarList.componentName = 'ToolBar.List'

export default ToolBarList
