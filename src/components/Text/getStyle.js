// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function getStyle({
  // Style
  color,
  fontSize,
  fontWeight,
  style,
  className
}) {
  // 判断颜色是否在枚举值中
  const isColorClass = DOMUtil.variables.colors.includes(color)
  const isFontSizeClass = DOMUtil.variables.sizes.includes(fontSize)
  const isFontWeightClass = DOMUtil.variables.sizes.includes(fontWeight)

  // 构建自定义样式
  const newStyle = {
    ...(!isColorClass && color ? { color } : {}),
    ...(!isFontSizeClass && fontSize ? { fontSize: fontSize } : {}),
    ...(!isFontWeightClass && fontWeight ? { fontWeight: fontWeight } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(
    isColorClass && color && `lyrixi-color-${color}`,
    isFontSizeClass && fontSize && `lyrixi-font-size-${fontSize}`,
    isFontWeightClass && fontWeight && `lyrixi-font-weight-${fontWeight}`,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
