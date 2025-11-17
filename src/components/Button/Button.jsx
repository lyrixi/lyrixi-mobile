import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { colorClasses, backgroundColorClasses, sizeClasses, radiusClasses } from './enums'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import Icon from './../Icon'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Icon } from 'lyrixi-mobile'
测试使用-end */

const Button = forwardRef(
  (
    {
      // Button: Style
      color = 'default', // 颜色: default, transparent, primary, link, warning, danger, success
      backgroundColor = 'white', // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      size = 'm', // 尺寸: xxs, xs, s, m, l, xl
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

    // 判断颜色是否在枚举值中
    const isColorClass = colorClasses.includes(color)
    const isBackgroundColorClass = backgroundColorClasses.includes(backgroundColor)
    const isSizeClass = sizeClasses.includes(size)
    const isRadiusClass = radiusClasses.includes(radius)

    // 构建自定义样式
    const buttonStyle = {
      ...(!isColorClass && color ? { color } : {}),
      ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
      ...(!isSizeClass && typeof size === 'number'
        ? { height: `${size}px`, width: square ? `${size}px` : 'auto' }
        : {}),
      ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
      ...style
    }

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
        // Style
        style={buttonStyle}
        className={DOMUtil.classNames(
          'lyrixi-button',
          ['top', 'bottom'].includes(iconPosition) && `lyrixi-flex-vertical`,
          isColorClass && color && `lyrixi-color-${color} lyrixi-border-color-${color}`,
          isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
          border !== 'none' && `lyrixi-border-width-default`,
          border && `lyrixi-border-style-${border}`,
          isSizeClass && size && `lyrixi-size-${size}`,
          isRadiusClass && radius && `lyrixi-radius-${radius}`,
          square && `lyrixi-shape-square`,
          className
        )}
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
