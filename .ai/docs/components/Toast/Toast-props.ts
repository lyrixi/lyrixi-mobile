/**
 * Toast API（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties } from 'react'

export interface ToastOpenProps {
  /** 显示时长（ms），默认 `2000` */
  duration?: number
  /** 遮罩是否可点击穿透 */
  maskClickable?: boolean
  /** 弹出位置 */
  position?: string
  /** 唯一标识 */
  id?: string
  /** 内容文本 */
  content?: string
  /** 遮罩类名 */
  maskClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 挂载节点 */
  portal?: HTMLElement
  /** 打开回调 */
  onOpen?: () => void
  /** 关闭回调 */
  onClose?: () => void
}

export interface ToastCloseOptions {
  /** 关闭回调 */
  onClose?: () => void
}

/** Toast 默认属性 */
export type ToastDefaultProps = ToastOpenProps

// ---------- Toast module types ----------

export interface ToastComponents {
  /** 默认属性 */
  defaultProps?: ToastOpenProps
  /** 显示 Toast */
  open: (this: { defaultProps?: ToastOpenProps } | void, props?: ToastOpenProps) => HTMLElement
  /** 隐藏 Toast */
  close: (options?: ToastCloseOptions) => void
}
