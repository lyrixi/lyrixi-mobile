import type { CSSProperties } from 'react'
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
}: {
  color?: string
  fontSize?: string | number
  fontWeight?: string | number
  style?: CSSProperties
  className?: string
}) {
  // 判断颜色是否在枚举值中（含类名 token 的需与 design token 字符串比较）
  const isColorClass = color !== null && DOMUtil.variables.colors.includes(String(color))
  const isFontSizeClass = fontSize !== null && DOMUtil.variables.sizes.includes(String(fontSize))
  const isFontWeightClass =
    fontWeight !== null && DOMUtil.variables.sizes.includes(String(fontWeight))

  // 构建自定义样式
  const newStyle: CSSProperties = {
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
