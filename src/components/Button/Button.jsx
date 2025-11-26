import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import getStyle from './getStyle'

// 内库使用-start
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { Icon } from 'lyrixi-mobile'
测试使用-end */

const Button = forwardRef(
  (
    {
      id,
      // Button: Style
      color = 'default', // 颜色: default, transparent, primary, link, warning, danger, success
      borderColor, // 边框颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor = 'white', // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
      fontSize, // 字体大小: xxs, xs, s, m, l, xl
      radius, // 圆角: xxs, xs, s, m, l, xl
      square, // 是否为正方形
      border = 'solid', // 边框: none, dotted, dashed, solid
      style,
      className,

      // Button: Status
      disabled,

      // Button: Elements
      children,

      // Icon: Style
      iconClassName,
      iconPosition = 'left',
      iconColor,
      iconBackgroundColor,
      iconSize,
      iconPadding,
      iconRadius,

      // Events
      onClick
    },
    ref
  ) => {
    const rootRef = useRef(null)

    const { style: newStyle, className: newClassName } = getStyle({
      // Style
      color,
      borderColor,
      backgroundColor,
      size,
      fontSize,
      radius,
      border,
      square,
      style,
      // ClassName
      className,
      // Icon: Style
      iconPosition
    })

    // Expose
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <div
        ref={rootRef}
        id={id}
        // Style
        style={newStyle}
        className={newClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {/* Element: Icon Left */}
        {iconClassName && ['left', 'top'].includes(iconPosition) && (
          <Icon
            iconClassName={iconClassName}
            className="lyrixi-button-icon"
            // Style
            color={iconColor}
            backgroundColor={iconBackgroundColor}
            size={iconSize}
            padding={iconPadding}
            radius={iconRadius}
          />
        )}

        {/* Element: Children */}
        {children && <div className="lyrixi-button-text">{children}</div>}

        {/* Element: Icon Right */}
        {iconClassName && ['right', 'bottom'].includes(iconPosition) && (
          <Icon
            iconClassName={iconClassName}
            className="lyrixi-button-icon"
            // Style
            color={iconColor}
            backgroundColor={iconBackgroundColor}
            size={iconSize}
            padding={iconPadding}
            radius={iconRadius}
          />
        )}
      </div>
    )
  }
)

// Component Name, for compact
Button.componentName = 'Button'

export default Button
