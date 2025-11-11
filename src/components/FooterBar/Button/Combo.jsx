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
    // Combo: Status
    open,

    // Combo: Style
    style,
    className,
    color = 'default',
    backgroundColor,
    shape,
    border,
    radius,
    size,

    // Combo: Element
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

  return (
    <Button
      ref={comboRef}
      // Combo: Status
      // Combo: Style
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-button',
        className,
        open ? 'lyrixi-expand' : ''
      )}
      color={color}
      backgroundColor={backgroundColor}
      shape={shape}
      border={border}
      radius={radius || 's'}
      size={size || 's'}
      // Events
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default forwardRef(Combo)
