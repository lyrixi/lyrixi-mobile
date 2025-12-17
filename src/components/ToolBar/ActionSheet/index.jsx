import React, { forwardRef } from 'react'
import Combo from './../components/Combo'

// 内库使用-start
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// 操作表下拉
function ToolBarActionSheet(
  {
    // Value & Display Value
    value,
    placeholder = '',

    // Style
    style,
    className,
    color = 'default',
    backgroundColor,
    sizeEqual,
    border = 'none',
    radius,
    size,
    maskStyle,
    maskClassName,
    modalStyle,
    modalClassName,

    // Element
    comboRender,
    comboChildren,
    arrowRender,
    portal,
    list,

    // Events
    onChange
  },
  ref
) {
  // 修改
  async function handleChange(newValue) {
    if (onChange) {
      let goOn = await onChange([newValue])
      if (goOn === false) return
    }
  }

  // 获取标题节点
  function getComboNode({ comboRef, open, onClick }) {
    if (typeof comboRender === 'function') {
      return comboRender({
        comboRef,
        open,
        onClick
      })
    }
    return (
      <Combo
        ref={comboRef}
        // Status
        open={open}
        // Style
        style={style}
        className={className}
        color={color}
        backgroundColor={backgroundColor}
        sizeEqual={sizeEqual}
        border={border}
        radius={radius}
        size={size}
        // Elements
        arrowRender={arrowRender}
        // Events
        onClick={onClick}
      >
        {comboChildren || value?.name || placeholder}
      </Combo>
    )
  }

  return (
    <ActionSheet.Combo
      ref={ref}
      // Value & Display Value
      value={value}
      list={list}
      // Style
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      modalStyle={modalStyle}
      modalClassName={modalClassName}
      // Element
      portal={portal}
      comboRender={getComboNode}
      // Events
      onChange={handleChange}
    />
  )
}

// Component Name, for compact
ToolBarActionSheet.componentName = 'ToolBar.ActionSheet'

export default forwardRef(ToolBarActionSheet)
