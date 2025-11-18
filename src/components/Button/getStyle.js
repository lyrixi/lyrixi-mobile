// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function pxToNumber(value) {
  // 判断是否为以'px'结尾的字符串，并且前面是数字
  if (typeof value === 'string' && /^\d+(\.\d+)?px$/.test(value.trim())) {
    // 提取数值部分并转换为数字
    return parseFloat(value.trim().replace('px', ''))
  }
  // 不是'数值px'格式，则原样返回
  return value
}

function getStyle({
  // Style
  color,
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
  iconPosition,
  // Icon: ClassName
  iconClassName
}) {
  // eslint-disable-next-line
  fontSize = pxToNumber(fontSize)
  // eslint-disable-next-line
  size = pxToNumber(size)
  // eslint-disable-next-line
  radius = pxToNumber(radius)

  // 判断颜色是否在枚举值中
  const isColorClass = DOMUtil.variables.colors.includes(color)
  const isBackgroundColorClass = DOMUtil.variables.backgroundColors.includes(backgroundColor)
  const isSizeClass = DOMUtil.variables.sizes.includes(size)
  const isRadiusClass = DOMUtil.variables.radiuses.includes(radius)
  const isFontSizeClass = DOMUtil.variables.fontSizes.includes(fontSize)

  // 构建自定义样式
  const newStyle = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isBackgroundColorClass && backgroundColor ? { backgroundColor } : {}),
    ...(!isSizeClass && typeof size === 'number'
      ? { height: `${size}px`, width: square ? `${size}px` : 'auto' }
      : {}),
    ...(!isRadiusClass && radius ? { borderRadius: radius } : {}),
    ...(!isFontSizeClass && fontSize ? { fontSize: fontSize } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(
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
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
