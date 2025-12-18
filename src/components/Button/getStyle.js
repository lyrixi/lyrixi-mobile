// 内库使用-start
import MathUtil from './../../utils/MathUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function getStyle({
  // Style
  direction,
  block,
  color,
  backgroundColor,
  borderColor,
  border,
  size,
  sizeEqual,
  fontSize,
  radius,
  style,
  className
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
    ...(!isSizeClass && size ? { height: size, width: sizeEqual ? size : 'auto' } : {}),
    ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
    ...(!isFontSizeClass && fontSize ? { fontSize: fontSize } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(
    'lyrixi-button',
    direction === 'vertical' && `lyrixi-flex-vertical`,
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
