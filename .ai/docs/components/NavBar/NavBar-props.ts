/**
 * NavBar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface NavBarProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 导航栏内容 */
  children?: ReactNode
}

export interface NavBarTitleProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 标题内容 */
  children?: ReactNode
}

export interface NavBarButtonProps {
  /** 方向 */
  direction?: string
  /** 块级按钮 */
  block?: boolean
  /** 文字颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 边框颜色 */
  borderColor?: string
  /** 边框样式 */
  border?: string
  /** 尺寸 */
  size?: string | number | string[]
  /** 等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 按钮内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: MouseEvent) => void
}

export interface NavBarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface NavBarTitleRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
