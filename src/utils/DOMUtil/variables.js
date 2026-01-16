// 组件标准变量枚举值，与less中的枚举值一致

// 颜色枚举值(color.less)
const colors = [
  'transparent',
  'white',
  'default',
  'secondary',
  'tertiary',
  'quaternary',
  'primary',
  'primary-lighten',
  'info',
  'info-lighten',
  'warning',
  'warning-lighten',
  'danger',
  'danger-lighten',
  'success',
  'success-lighten'
]

// 文字颜色枚举值(color.less)
const fontColors = ['default', 'secondary', 'tertiary', 'quaternary', 'disabled']

// 背景色枚举值(color.less)
const bgColors = ['transparent', 'white', 'default', 'secondary', 'tertiary', 'quaternary']
// 尺寸枚举值(业务自行控制)
const sizes = ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']

// 导出颜色枚举值
export default { colors, sizes }
