import type { CSSProperties } from 'react'

export interface ToastCloseParams {
  onClose?: () => void
  /** 是否播放关闭动画，默认 true */
  animated?: boolean
}

export type ToastPlacement = 'top' | 'middle' | 'bottom'

export interface ToastProps {
  // Value & Display Value
  duration?: number
  maskClickable?: boolean
  placement?: ToastPlacement
  content?: string
  // Style
  maskClassName?: string
  maskStyle?: CSSProperties
  modalClassName?: string
  modalStyle?: CSSProperties
  // Elements
  portal?: HTMLElement
  // Events
  onOpen?: () => void
  onClose?: () => void
}
