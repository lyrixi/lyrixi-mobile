import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { colorClasses, backgroundColorClasses, sizeClasses, radiusClasses } from './../Button/enums'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Icon = forwardRef(
  (
    {
      icon,
      // 颜色: default, transparent, primary, link, warning, danger, success
      color,
      // 背景颜色: default, transparent, white, primary, link, warning, danger, success
      backgroundColor,
      // 尺寸: xxs, xs, s, m, l, xl
      size = 'm',
      // 内边距: 数值
      padding,
      // 圆角: xxs, xs, s, m, l, xl
      radius,
      disabled,
      style,
      className,
      children,
      ...props
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
    const iconStyle = {
      ...(!isColorClass && color ? { color } : {}),
      ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
      ...(!isSizeClass && innerSize ? { fontSize: `${innerSize}px` } : {}),
      ...(typeof size === 'number'
        ? { width: size, height: size, fontSize: innerSize, lineHeight: size }
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
      <i
        style={iconStyle}
        {...props}
        className={DOMUtil.classNames(
          'lyrixi-icon',
          icon,
          isColorClass && color && `lyrixi-color-${color} lyrixi-border-color-${color}`,
          isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
          isSizeClass && size && `lyrixi-size-${size}`,
          isRadiusClass && radius && `lyrixi-radius-${radius}`,
          className
        )}
        disabled={disabled}
        ref={rootRef}
      >
        {children}
      </i>
    )
  }
)

export default Icon
