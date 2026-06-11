/**
 * Badge Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface BadgeProps {
  /** 徽标内容，默认 `'0'` */
  children?: string | number | ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 最大长度，默认 `2` */
  maxLength?: number
  /** 省略符，默认 `'+'` */
  ellipsis?: string
}

export interface BadgeRef {
  /** 根元素 */
  element?: HTMLSpanElement | null
  /** 获取根元素 */
  getElement?: () => HTMLSpanElement | null
}
