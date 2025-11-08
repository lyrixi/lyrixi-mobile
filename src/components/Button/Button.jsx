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
      // Icon
      icon,
      iconPosition,
      iconColor,
      iconBackgroundColor,
      iconSize,
      iconPadding,
      iconRadius,

      // 颜色: default, transparent, primary, link, warning, danger, success
      color = 'default',
      // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      backgroundColor = 'white',
      // 尺寸: xxs, xs, s, m, l, xl
      size = 'm',
      // 内边距: 数值
      padding,
      // 圆角: xxs, xs, s, m, l, xl
      radius,
      // 是否为正方形
      square,
      // 边框: none, dotted, dashed, solid
      border = 'solid',
      className,
      children,
      style
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // 判断颜色是否在枚举值中
    const isColorClass = colorClasses.includes(color)
    const isBackgroundColorClass = backgroundColorClasses.includes(backgroundColor)
    const isSizeClass = sizeClasses.includes(size)
    const isRadiusClass = radiusClasses.includes(radius)
    let innerSize =
      typeof size === 'number' && typeof padding === 'number' ? (size || 16) - padding : size

    // 构建自定义样式
    const buttonStyle = {
      ...(!isColorClass && color ? { color } : {}),
      ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
      ...(!isSizeClass && innerSize ? { fontSize: `${innerSize}px` } : {}),
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
        className={DOMUtil.classNames(
          'lyrixi-button',
          isColorClass && color && `lyrixi-color-${color} lyrixi-border-color-${color}`,
          isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
          border !== 'none' && `lyrixi-border-width-default`,
          border && `lyrixi-border-style-${border}`,
          isSizeClass && size && `lyrixi-size-${size}`,
          isRadiusClass && radius && `lyrixi-radius-${radius}`,
          square && `lyrixi-shape-square`,
          className
        )}
        style={buttonStyle}
        ref={rootRef}
      >
        {icon && iconPosition !== 'right' && (
          <Icon
            icon={icon}
            className="lyrixi-button-icon"
            color={iconColor}
            backgroundColor={iconBackgroundColor}
            size={iconSize}
            padding={iconPadding}
            radius={iconRadius}
          />
        )}
        {children && <div className="lyrixi-button-text">{children}</div>}
        {icon && iconPosition === 'right' && (
          <Icon
            icon={icon}
            className="lyrixi-button-icon"
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
