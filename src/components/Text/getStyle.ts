import type { CSSProperties } from 'react'
// 内库使用-start
import VariablesUtil from './../../utils/VariablesUtil'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { VariablesUtil, DOMUtil } from 'lyrixi-mobile'
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
  const colorClass = color ? VariablesUtil.getColorClass(color) : ''
  const fontSizeClass =
    typeof fontSize === 'string' || typeof fontSize === 'number'
      ? VariablesUtil.getFontSizeClass(String(fontSize))
      : ''
  const fontWeightClass =
    typeof fontWeight === 'string' || typeof fontWeight === 'number'
      ? VariablesUtil.getFontWeightClass(String(fontWeight))
      : ''

  // 构建自定义样式
  const newStyle: CSSProperties = {
    ...(!colorClass && color ? { color } : {}),
    ...(!fontSizeClass && fontSize ? { fontSize: fontSize } : {}),
    ...(!fontWeightClass && fontWeight ? { fontWeight: fontWeight } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(colorClass, fontSizeClass, fontWeightClass, className)

  return { style: newStyle, className: newClassName }
}

export default getStyle
