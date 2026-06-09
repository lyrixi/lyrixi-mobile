/**
 * IFrame Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties } from 'react'

export interface IFrameProps {
  /** 页面地址 */
  src?: string
  /** 数据 */
  data?: unknown
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface IFrameRef {
  /** 根元素 */
  element: HTMLIFrameElement | null
}