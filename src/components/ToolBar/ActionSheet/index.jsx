import React, { useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import ActionSheet from './../../ActionSheet'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, ActionSheet, Button } from 'lyrixi-mobile'
测试使用-end */

// 操作表下拉
function ToolBarActionSheet({
  // Combo Style
  comboColor = 'default',
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

  // Combo Value
  title = '',
  titleRender,
  arrowRender = () => <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>,
  value,
  list,
  onChange
}) {
  const dropdownRef = useRef(null)

  // 修改
  async function handleChange(newValue) {
    if (onChange) {
      let goOn = await onChange([newValue])
      if (goOn === false) return
    }

    // 关闭下拉
    dropdownRef.current?.close?.()
  }

  // 获取标题节点
  function getTitleNode(open) {
    if (typeof titleRender === 'function') {
      return titleRender({
        className: 'lyrixi-toolbar-dropdown-combo-title',
        open: open,
        value: value?.[0]?.name
      })
    }
    return <span className="lyrixi-toolbar-dropdown-combo-title">{title || value?.[0]?.name}</span>
  }

  // 获取箭头节点
  function getArrowNode(open) {
    if (typeof arrowRender === 'function') {
      return arrowRender({ open: open })
    }
    return <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>
  }

  // 获取Combo节点
  function getComboNode({ open, comboRef, onClick }) {
    return (
      <Button
        ref={comboRef}
        color={comboColor}
        backgroundColor={comboBackgroundColor}
        border={comboBorder}
        size={comboSize || 's'}
        radius={comboRadius || 's'}
        shape={comboShape}
        className={DOMUtil.classNames(
          'lyrixi-toolbar-dropdown-combo lyrixi-toolbar-button',
          comboClassName,
          open ? 'lyrixi-expand' : ''
        )}
        style={comboStyle}
        onClick={onClick}
      >
        {getTitleNode(open)}
        {getArrowNode(open)}
      </Button>
    )
  }

  return (
    <ActionSheet.Combo
      portal={portal}
      maskClassName={maskClassName}
      maskStyle={maskStyle}
      modalClassName={modalClassName}
      modalStyle={modalStyle}
      comboRender={getComboNode}
      value={value?.[0]}
      list={list}
      onChange={handleChange}
    />
  )
}

// Component Name, for compact
ToolBarActionSheet.componentName = 'ToolBar.ActionSheet'

export default ToolBarActionSheet
