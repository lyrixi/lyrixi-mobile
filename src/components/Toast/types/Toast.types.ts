import type { CSSProperties } from 'react'

export interface ToastHideOptions {
  onClose?: () => void
}

export type ToastShowExtendedHTMLElement = HTMLElement & { showTimeout?: ReturnType<typeof setTimeout> }

export type ToastHideExtendedHTMLElement = HTMLElement & { timeout?: ReturnType<typeof setTimeout> }

export interface ToastShowProps {
  // Value & Display Value
  duration?: number
  maskClickable?: boolean
  position?: string
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
