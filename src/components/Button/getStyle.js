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
  borderColor,
  backgroundColor,
  size,
  sizeEqual,
  fontSize,
  radius,
  border,
  block,
  style,
  // ClassName
  className,
  // Icon: Style
  iconPosition
}) {
  // eslint-disable-next-line
  fontSize = MathUtil.variableSize(fontSize) || fontSize
  // eslint-disable-next-line
  size = MathUtil.variableSize(size) || size
  // eslint-disable-next-line
  radius = MathUtil.variableSize(radius) || radius

  // 判断颜色是否在枚举值中
  const isColorClass = DOMUtil.variables.colors.includes(color)
  const isBorderColorClass = DOMUtil.variables.colors.includes(borderColor)
  const isBackgroundColorClass = DOMUtil.variables.colors.includes(backgroundColor)
  const isSizeClass = DOMUtil.variables.sizes.includes(size)
  const isRadiusClass = DOMUtil.variables.sizes.includes(radius)
  const isFontSizeClass = DOMUtil.variables.sizes.includes(fontSize)

  // 构建自定义样式
  const newStyle = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isBorderColorClass && borderColor ? { borderColor } : {}),
    ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!isSizeClass && typeof size === 'number'
      ? { height: `${size}px`, width: sizeEqual ? `${size}px` : 'auto' }
      : {}),
    ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
    ...(!isFontSizeClass && fontSize ? { fontSize: fontSize } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(
    'lyrixi-button',
    ['top', 'bottom'].includes(iconPosition) && `lyrixi-flex-vertical`,
    isColorClass && color && `lyrixi-color-${color}`,
    isBorderColorClass && borderColor && `lyrixi-border-color-${borderColor}`,
    isBackgroundColorClass && backgroundColor && `lyrixi-bg-${backgroundColor}`,
    border !== 'none' && `lyrixi-border-width-default`,
    border && `lyrixi-border-style-${border}`,
    block && `lyrixi-button-block`,
    isSizeClass && size && `lyrixi-size-${size}`,
    isRadiusClass && radius && `lyrixi-radius-${radius}`,
    sizeEqual && `lyrixi-size-equal`,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
