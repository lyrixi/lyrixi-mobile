import React, { useRef } from 'react'

import Dropdown from './../Dropdown'
import List from './List'

// 列表下拉
function ToolBarList({
  // Value & Display Value
  value,
  placeholder = '',

  // Style
  direction,
  block,
  color,
  backgroundColor,
  borderColor,
  border = 'none',
  size,
  sizeEqual,
  fontSize,
  radius = 'm',
  style,
  className,

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
    onChange?.(newValue)
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
      direction={direction}
      block={block}
      radius={radius}
      size={size}
      fontSize={fontSize}
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
