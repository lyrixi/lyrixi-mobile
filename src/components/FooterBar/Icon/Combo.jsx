import React, { useImperativeHandle, useRef, forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import Icon from './../../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

// 操作表下拉
function Combo(
  {
    // Combo: Status
    disabled,
    open,

    // Combo: Style
    style,
    className,
    color, // 颜色: default, transparent, primary, link, warning, danger, success
    backgroundColor, // 背景颜色: default, transparent, white, primary, link, warning, danger, success
    size = 'm', // 尺寸: xxs, xs, s, m, l, xl
    padding, // 内边距: 数值
    radius, // 圆角: xxs, xs, s, m, l, xl

    // Combo: Elements
    iconClassName,
    children
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
    <Icon
      ref={ref}
      // Combo: Status
      disabled={disabled}
      // Combo: Style
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-footerbar-icon',
        className,
        open ? 'lyrixi-expand' : ''
      )}
      color={color}
      backgroundColor={backgroundColor}
      size={size || 22}
      padding={padding}
      radius={radius}
      // Combo: Elements
      iconClassName={iconClassName}
    >
      {children}
    </Icon>
  )
}

export default forwardRef(Combo)
