// 组件标准变量枚举值，与 less 中的枚举值一致

// 文字颜色枚举值（color.less）
const fontColors = [
  'transparent',
  'white',
  'default',
  'secondary',
  'tertiary',
  'quaternary',
  'primary',
  'info',
  'warning',
  'danger',
  'success',
  'disabled'
]

// 背景颜色枚举值（color.less）
const bgColors = [
  'transparent',
  'white',
  'default',
  'primary',
  'primary-lighten',
  'info',
  'info-lighten',
  'warning',
  'warning-lighten',
  'danger',
  'danger-lighten',
  'success',
  'success-lighten',
  'disabled',
  'disabled-lighten'
]

// 边框颜色枚举值（color.less）
const borderColors = [
  'transparent',
  'white',
  'default',
  'primary',
  'info',
  'warning',
  'danger',
  'success',
  'disabled'
]

// 文字大小枚举值（size.less）
const fontSizes = ['xxl', 'xl', 'l', 'm', 's', 'xs']

// 文字粗细枚举值（size.less）
const fontWeights = ['xl', 'l', 'm', 's']

// 高度枚举值（size.less）
const heights = ['xs', 's', 'm', 'l', 'xl', 'xxl']

// 圆角枚举值（size.less）
const radius = ['xl', 'l', 'm', 's', 'xs', 'xxs']

const variables = {
  fontColors,
  bgColors,
  borderColors,
  fontSizes,
  fontWeights,
  heights,
  radius
}

export default variables
