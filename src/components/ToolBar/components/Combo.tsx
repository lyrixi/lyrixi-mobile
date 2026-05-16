import React, { useImperativeHandle, useRef, forwardRef } from 'react'

import type { ToolBarComboProps, ToolBarComboRef } from './../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
import type { ButtonRef } from './../../Button/types'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Button, type ButtonRef } from 'lyrixi-mobile'
测试使用-end */

// 操作表下拉
const Combo = forwardRef<ToolBarComboRef, ToolBarComboProps>(function Combo(
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
  const comboRef = useRef<ButtonRef | null>(null)
  useImperativeHandle(ref, () => {
    return {
      element: comboRef.current?.element ?? null,
      getElement: () => comboRef.current?.element ?? null
    }
  })

  // 获取箭头节点
  function renderArrow() {
    if (typeof arrowRender === 'function') {
      return arrowRender({ open: open ?? null })
    }
    return null
  }

  const ArrowNode = renderArrow()

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
      {/* 有箭头左右对齐, 没有箭头居中对齐 */}
      {ArrowNode ? <span className="lyrixi-toolbar-dropdown-combo-title">{children}</span> : children}
      {renderArrow()}
    </Button>
  )
})
export default Combo
