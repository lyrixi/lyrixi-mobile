// 内库使用-start
import MathUtil from './../../utils/MathUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function getStyle({
  // Style
  color,
  backgroundColor,
  size,
  radius,
  padding,
  style,
  className
}) {
  // eslint-disable-next-line
  size = MathUtil.variableSize(size) || size
  // eslint-disable-next-line
  padding = MathUtil.variableSize(padding) || padding
  // eslint-disable-next-line
  radius = MathUtil.variableSize(radius) || radius

  // 判断颜色是否在枚举值中
  const isColorClass = DOMUtil.variables.colors.includes(color)
  const isBackgroundColorClass = DOMUtil.variables.colors.includes(backgroundColor)
  const isSizeClass = DOMUtil.variables.sizes.includes(size)
  const isRadiusClass = DOMUtil.variables.sizes.includes(radius)

  // 图标大小需要减掉间距，若无间距则直接使用size
  let innerSize =
    typeof size === 'number' && typeof padding === 'number' ? (size || 16) - padding : size

  // 构建自定义样式
  const newStyle = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!isSizeClass && innerSize ? { fontSize: innerSize } : {}),
    ...(typeof size === 'number'
      ? { width: size, height: size, fontSize: innerSize, lineHeight: size }
      : {}),
    ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(
    'lyrixi-icon',
    isColorClass && color && `lyrixi-color-${color} lyrixi-border-color-${color}`,
    isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
    isSizeClass && size && `lyrixi-icon-size-${size}`,
    isRadiusClass && radius && `lyrixi-radius-${radius}`,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
