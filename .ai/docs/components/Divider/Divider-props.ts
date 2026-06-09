/**
 * Divider Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface DividerProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 分割线内容 */
  children?: ReactNode
}

export interface DividerRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
}