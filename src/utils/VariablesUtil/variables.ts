// 组件标准变量枚举值，与 color.less / size.less 一致

export type DesignToken = {
  className: string
  value: string
}

export type DesignTokenMap = Record<string, DesignToken>

// 文字颜色（color.less）
const fontColors: DesignTokenMap = {
  transparent: { className: 'lyrixi-color-transparent', value: 'transparent' },
  white: { className: 'lyrixi-color-white', value: 'white' },
  default: { className: 'lyrixi-color-default', value: 'var(--lyrixi-color-default)' },
  secondary: { className: 'lyrixi-color-secondary', value: 'var(--lyrixi-color-secondary)' },
  tertiary: { className: 'lyrixi-color-tertiary', value: 'var(--lyrixi-color-tertiary)' },
  quaternary: { className: 'lyrixi-color-quaternary', value: 'var(--lyrixi-color-quaternary)' },
  primary: { className: 'lyrixi-color-primary', value: 'var(--lyrixi-color-primary)' },
  info: { className: 'lyrixi-color-info', value: 'var(--lyrixi-color-info)' },
  warning: { className: 'lyrixi-color-warning', value: 'var(--lyrixi-color-warning)' },
  danger: { className: 'lyrixi-color-danger', value: 'var(--lyrixi-color-danger)' },
  success: { className: 'lyrixi-color-success', value: 'var(--lyrixi-color-success)' },
  disabled: { className: 'lyrixi-color-disabled', value: 'var(--lyrixi-color-disabled)' }
}

// 背景颜色（color.less）
const bgColors: DesignTokenMap = {
  transparent: { className: 'lyrixi-bg-transparent', value: 'transparent' },
  white: { className: 'lyrixi-bg-white', value: 'white' },
  default: { className: 'lyrixi-bg-default', value: 'var(--lyrixi-bg-default)' },
  primary: { className: 'lyrixi-bg-primary', value: 'var(--lyrixi-color-primary)' },
  'primary-lighten': {
    className: 'lyrixi-bg-primary-lighten',
    value: 'var(--lyrixi-color-primary-lighten)'
  },
  info: { className: 'lyrixi-bg-info', value: 'var(--lyrixi-color-info)' },
  'info-lighten': { className: 'lyrixi-bg-info-lighten', value: 'var(--lyrixi-color-info-lighten)' },
  warning: { className: 'lyrixi-bg-warning', value: 'var(--lyrixi-color-warning)' },
  'warning-lighten': {
    className: 'lyrixi-bg-warning-lighten',
    value: 'var(--lyrixi-color-warning-lighten)'
  },
  danger: { className: 'lyrixi-bg-danger', value: 'var(--lyrixi-color-danger)' },
  'danger-lighten': {
    className: 'lyrixi-bg-danger-lighten',
    value: 'var(--lyrixi-color-danger-lighten)'
  },
  success: { className: 'lyrixi-bg-success', value: 'var(--lyrixi-color-success)' },
  'success-lighten': {
    className: 'lyrixi-bg-success-lighten',
    value: 'var(--lyrixi-color-success-lighten)'
  },
  disabled: { className: 'lyrixi-bg-disabled', value: 'var(--lyrixi-color-disabled)' },
  'disabled-lighten': {
    className: 'lyrixi-bg-disabled-lighten',
    value: 'var(--lyrixi-color-disabled-lighten)'
  }
}

// 边框颜色（color.less）
const borderColors: DesignTokenMap = {
  transparent: { className: 'lyrixi-border-color-transparent', value: 'transparent' },
  white: { className: 'lyrixi-border-color-white', value: 'white' },
  default: { className: 'lyrixi-border-color-default', value: 'var(--lyrixi-border-color)' },
  primary: { className: 'lyrixi-border-color-primary', value: 'var(--lyrixi-color-primary)' },
  info: { className: 'lyrixi-border-color-info', value: 'var(--lyrixi-color-info)' },
  warning: { className: 'lyrixi-border-color-warning', value: 'var(--lyrixi-color-warning)' },
  danger: { className: 'lyrixi-border-color-danger', value: 'var(--lyrixi-color-danger)' },
  success: { className: 'lyrixi-border-color-success', value: 'var(--lyrixi-color-success)' },
  disabled: { className: 'lyrixi-border-color-disabled', value: 'var(--lyrixi-color-disabled)' }
}

// 文字大小（size.less）
const fontSizes: DesignTokenMap = {
  xxl: { className: 'lyrixi-font-size-xxl', value: 'var(--lyrixi-font-size-xxl)' },
  xl: { className: 'lyrixi-font-size-xl', value: 'var(--lyrixi-font-size-xl)' },
  l: { className: 'lyrixi-font-size-l', value: 'var(--lyrixi-font-size-l)' },
  m: { className: 'lyrixi-font-size-m', value: 'var(--lyrixi-font-size-m)' },
  s: { className: 'lyrixi-font-size-s', value: 'var(--lyrixi-font-size-s)' },
  xs: { className: 'lyrixi-font-size-xs', value: 'var(--lyrixi-font-size-xs)' }
}

// 文字粗细（size.less）
const fontWeights: DesignTokenMap = {
  xl: { className: 'lyrixi-font-weight-xl', value: 'var(--lyrixi-font-weight-xl)' },
  l: { className: 'lyrixi-font-weight-l', value: 'var(--lyrixi-font-weight-l)' },
  m: { className: 'lyrixi-font-weight-m', value: 'var(--lyrixi-font-weight-m)' },
  s: { className: 'lyrixi-font-weight-s', value: 'var(--lyrixi-font-weight-s)' }
}

// 高度（size.less，Button 使用 lyrixi-size-* 类名）
const heights: DesignTokenMap = {
  xs: { className: 'lyrixi-size-xs', value: 'var(--lyrixi-height-xs)' },
  s: { className: 'lyrixi-size-s', value: 'var(--lyrixi-height-s)' },
  m: { className: 'lyrixi-size-m', value: 'var(--lyrixi-height-m)' },
  l: { className: 'lyrixi-size-l', value: 'var(--lyrixi-height-l)' },
  xl: { className: 'lyrixi-size-xl', value: 'var(--lyrixi-height-xl)' },
  xxl: { className: 'lyrixi-size-xxl', value: 'var(--lyrixi-height-xxl)' }
}

// 圆角（size.less）
const radius: DesignTokenMap = {
  xl: { className: 'lyrixi-radius-xl', value: 'var(--lyrixi-radius-xl)' },
  l: { className: 'lyrixi-radius-l', value: 'var(--lyrixi-radius-l)' },
  m: { className: 'lyrixi-radius-m', value: 'var(--lyrixi-radius-m)' },
  s: { className: 'lyrixi-radius-s', value: 'var(--lyrixi-radius-s)' },
  xs: { className: 'lyrixi-radius-xs', value: 'var(--lyrixi-radius-xs)' },
  xxs: { className: 'lyrixi-radius-xxs', value: 'var(--lyrixi-radius-xxs)' }
}

function getClassName(token: unknown, map: DesignTokenMap): string {
  return map[String(token)]?.className ?? ''
}

function getValue(token: unknown, map: DesignTokenMap): string {
  return map[String(token)]?.value ?? ''
}

function hasDesignToken(token: unknown, map: DesignTokenMap): boolean {
  return String(token) in map
}

const variables = {
  fontColors,
  bgColors,
  borderColors,
  fontSizes,
  fontWeights,
  heights,
  radius,
  getClassName,
  getValue,
  hasDesignToken
}

export default variables
