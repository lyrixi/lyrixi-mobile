/**
 * NoticeBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface NoticeBarProps {
  /** 通知标题 */
  title?: ReactNode
  /** 通知描述 */
  description?: ReactNode
  /** 通知类型，默认 `'info'` */
  type?: 'success' | 'info' | 'warning' | 'error'
  /** 是否可关闭 */
  closable?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 图标样式 */
  iconStyle?: CSSProperties
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 描述样式 */
  descriptionStyle?: CSSProperties
  /** 自定义图标渲染 */
  iconRender?: () => ReactNode
  /** 图标类名 */
  iconClassName?: string
  /** 图标颜色 */
  iconColor?: string
  /** 图标背景颜色 */
  iconBackgroundColor?: string
  /** 图标大小，默认 `'m'` */
  iconSize?: string | number
}

export interface NoticeBarRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
  /** 关闭通告栏 */
  close: () => void
  /** 打开通告栏 */
  open: () => void
}