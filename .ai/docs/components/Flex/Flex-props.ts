/**
 * Flex Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface FlexProps {
  /** 子项间距 */
  gap?: string | number
  /** 主轴对齐方式，默认 `'start'` */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  /** 交叉轴对齐方式 */
  align?: 'start' | 'center' | 'end'
  /** 主轴方向，默认 `'horizontal'` */
  direction?: 'horizontal' | 'vertical'
  /** 是否换行；`true` 换行，`false` 不换行，`'scroll'` 超出滚动 */
  wrap?: boolean | 'scroll'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
}

export interface FlexCompactProps {
  /** 分隔符 */
  separator?: ReactNode | boolean
  /** 块级布局 */
  block?: boolean
  /** 尺寸 */
  size?: 's' | 'm' | 'l' | string
  /** 方向 */
  direction?: 'horizontal' | 'vertical' | string
  /** 圆角 */
  radius?: 's' | 'm' | 'l' | string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 分隔符样式 */
  separatorStyle?: CSSProperties
  /** 分隔符类名 */
  separatorClassName?: string
  /** 子元素 */
  children?: ReactNode
}

export interface FlexRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}

export interface FlexCompactRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}