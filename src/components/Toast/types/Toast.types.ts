import type { CSSProperties } from 'react'

export interface ToastCloseOptions {
  onClose?: () => void
}

export type ToastOpenExtendedHTMLElement = HTMLElement & {
  showTimeout?: ReturnType<typeof setTimeout>
}

export type ToastCloseExtendedHTMLElement = HTMLElement & {
  timeout?: ReturnType<typeof setTimeout>
}

export type ToastPlacement = 'top' | 'middle' | 'bottom'

export interface ToastOpenProps {
  // Value & Display Value
  duration?: number
  maskClickable?: boolean
  placement?: ToastPlacement
  id?: string
  content?: string
  // Style
  maskClassName?: string
  maskStyle?: CSSProperties
  className?: string
  style?: CSSProperties
  // Elements
  portal?: HTMLElement
  // Events
  onOpen?: () => void
  onClose?: () => void
}
