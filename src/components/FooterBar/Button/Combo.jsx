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

    // Button: Style
    color, // 颜色: default, transparent, primary, link, warning, danger, success
    backgroundColor, // 背景颜色: default, transparent, white, primary, link, warning, danger, success
    size, // 尺寸: xxs, xs, s, m, l, xl
    radius, // 圆角: xxs, xs, s, m, l, xl
    square, // 是否为正方形
    border, // 边框: none, dotted, dashed, solid
    style,
    className,

    // Button: Status
    disabled,

    // Button: Elements
    children,

    // Icon: Style
    iconClassName,
    iconPosition,
    iconColor,
    iconBackgroundColor,
    iconSize,
    iconPadding,
    iconRadius,

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
      // Button: Style
      color={color}
      backgroundColor={backgroundColor}
      size={size}
      style={style}
      square={square}
      border={border}
      radius={radius}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-button',
        className,
        open ? 'lyrixi-expand' : ''
      )}
      // Button: Status
      disabled={disabled}
      // Icon: Style
      iconClassName={iconClassName}
      iconPosition={iconPosition}
      iconColor={iconColor}
      iconBackgroundColor={iconBackgroundColor}
      iconSize={iconSize}
      iconPadding={iconPadding}
      iconRadius={iconRadius}
      // Events
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default forwardRef(Combo)
