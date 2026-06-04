/**
 * Button Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ButtonProps {
  /** 按钮 ID */
  id?: string
  /** 方向，默认 `'horizontal'` */
  direction?: 'horizontal' | 'vertical'
  /** 是否为块级元素 */
  block?: boolean
  /** 颜色，默认 `'default'` */
  color?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 背景颜色，默认 `'white'` */
  backgroundColor?: 'default' | 'transparent' | 'white' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 边框颜色，默认 `'default'` */
  borderColor?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 边框样式，默认 `'solid'` */
  border?: 'none' | 'dotted' | 'dashed' | 'solid'
  /** 高度尺寸 */
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | [number, number]
  /** 是否为等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  /** 圆角 */
  radius?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 按钮内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: Event) => void
}

export interface ButtonTextProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 文本内容 */
  children?: ReactNode
}

export interface ButtonRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface ButtonTextRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
