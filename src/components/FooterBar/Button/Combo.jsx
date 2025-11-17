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
    color = 'default', // 颜色: default, transparent, primary, link, warning, danger, success
    backgroundColor = 'white', // 背景颜色: default, transparent, white, primary, link, warning, danger, success
    size = 'm', // 尺寸: xxs, xs, s, m, l, xl
    padding, // 内边距: 数值
    radius, // 圆角: xxs, xs, s, m, l, xl
    square, // 是否为正方形
    border = 'solid', // 边框: none, dotted, dashed, solid
    style,
    className,

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
      size={size || 's'}
      padding={padding}
      style={style}
      square={square}
      border={border}
      radius={radius || 's'}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-button',
        className,
        open ? 'lyrixi-expand' : ''
      )}
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
