import React, { useImperativeHandle, useRef, forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button } from 'lyrixi-mobile'
测试使用-end */

// 操作表下拉
function Combo(
  {
    // Status
    open,

    // Style
    style,
    className,
    color = 'default',
    borderColor = 'default',
    backgroundColor,
    sizeEqual,
    border,
    radius,
    size,

    // Element
    arrowRender = () => <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>,
    children,

    // Events
    onClick
  },
  ref
) {
  const comboRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      comboDOM: comboRef.current.rootDOM,
      getComboDOM: comboRef.current?.getComboDOM
    }
  })

  // 获取箭头节点
  function getArrowNode() {
    if (typeof arrowRender === 'function') {
      return arrowRender({ open: open })
    }
    return <i className="lyrixi-button-icon lyrixi-toolbar-dropdown-combo-arrow"></i>
  }

  return (
    <Button
      ref={comboRef}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      border={border}
      size={size || 's'}
      radius={radius || 's'}
      sizeEqual={sizeEqual}
      className={DOMUtil.classNames(
        'lyrixi-toolbar-dropdown-combo lyrixi-toolbar-button',
        className,
        open ? 'lyrixi-expand' : ''
      )}
      style={style}
      onClick={onClick}
    >
      <span className="lyrixi-toolbar-dropdown-combo-title">{children}</span>
      {getArrowNode()}
    </Button>
  )
}

export default forwardRef(Combo)
