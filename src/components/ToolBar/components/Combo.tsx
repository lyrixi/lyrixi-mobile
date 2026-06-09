import React, { useImperativeHandle, useRef, forwardRef } from 'react'

import type { ToolBarComboProps, ToolBarComboRef } from './ToolBar.Combo.types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Button from './../../Button'
import type { ButtonRef } from './../../Button/types'
import Icons from '../../../icons'
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
    variant = 'text',
    size,
    sizeEqual,
    fontSize,
    radius = 'm',
    style,
    className,

    // Elements
    arrowRender,
    arrowSvg = Icons.TriangleUpFill,
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

    if (arrowSvg) {
      return <Button.Icon svg={arrowSvg} size="xxxs" />
    }

    return null
  }

  const ArrowNode = renderArrow()

  return (
    <Button
      ref={comboRef}
      block={block}
      variant={variant}
      color={color}
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
      {ArrowNode ? (
        <span className="lyrixi-toolbar-dropdown-combo-title">{children}</span>
      ) : (
        children
      )}
      {renderArrow()}
    </Button>
  )
})
export default Combo
