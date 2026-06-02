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
  const colorClass =
    color !== null && color !== undefined ? VariablesUtil.getColorClass(color) : ''
  const fontSizeClass =
    fontSize !== null && fontSize !== undefined ? VariablesUtil.getFontSizeClass(fontSize) : ''
  const fontWeightClass =
    fontWeight !== null && fontWeight !== undefined ? VariablesUtil.getFontWeightClass(fontWeight) : ''

  // 构建自定义样式
  const newStyle: CSSProperties = {
    ...(!colorClass && color ? { color } : {}),
    ...(!fontSizeClass && fontSize ? { fontSize: fontSize } : {}),
    ...(!fontWeightClass && fontWeight ? { fontWeight: fontWeight } : {}),
    ...style
  }

  const newClassName = DOMUtil.classNames(
    colorClass,
    fontSizeClass,
    fontWeightClass,
    className
  )

  return { style: newStyle, className: newClassName }
}

export default getStyle
