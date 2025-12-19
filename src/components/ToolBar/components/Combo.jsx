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
    direction,
    block,
    color = 'default',
    backgroundColor,
    borderColor = 'default',
    border = 'none',
    size,
    sizeEqual,
    fontSize,
    radius = 'm',
    style,
    className,

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
      element: comboRef.current.element,
      getElement: comboRef.current?.getElement
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
      block={block}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      border={border}
      direction={direction}
      size={size}
      sizeEqual={sizeEqual}
      fontSize={fontSize}
      radius={radius}
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
