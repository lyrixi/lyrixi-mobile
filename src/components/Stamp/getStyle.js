// 内库使用-start
import Theme from './../../utils/Theme'
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Theme, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

function getStyle({
  // Style
  color,
  style
}) {
  // 判断颜色是否在枚举值中
  const isColorClass = DOMUtil.variables.colors.includes(color)

  let colorRgb = isColorClass ? undefined : Theme.hexToRgb(color)

  // 构建自定义样式
  const newStyle = {
    ...(!isColorClass ? {
      color: color,
      // 如果不考虑兼容性问题, 可以使用: color-mix(in srgb, color, white 50%);
      borderColor: `rgba(${colorRgb}, 0.5)`,
      backgroundColor: `rgba(${colorRgb}, 0.5)`
    } : {}),
    ...style
  }

  const newClassName = isColorClass ? `lyrixi-${color}` : undefined

  return { style: newStyle, className: newClassName }
}

export default getStyle
