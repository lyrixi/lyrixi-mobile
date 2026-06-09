/**
 * NavBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface NavBarProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 导航栏内容 */
  children?: ReactNode
}

/** NavBar ref 类型 — 直接引用 HTMLDivElement */
export type NavBarRef = HTMLDivElement | null

export interface NavBarTitleProps {
  /** 自定义样式 */
  style?: CSSProperties
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
  /** 外观变体，默认 `'text'` */
  variant?: 'solid' | 'text' | 'outlined' | 'filled' | 'dashed'
  /** 语义色 */
  color?: 'default' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 尺寸 */
  size?: string | number | readonly string[]
  /** 等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 按钮内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface ButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export type NavBarButtonRef = ButtonRef

export interface NavBarTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}