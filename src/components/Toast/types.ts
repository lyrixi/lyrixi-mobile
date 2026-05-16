import type { CSSProperties } from 'react'

export interface ToastHideOptions {
  onClose?: () => void
}

export type ToastShowExtendedHTMLElement = HTMLElement & { showTimeout?: ReturnType<typeof setTimeout> }

export type ToastHideExtendedHTMLElement = HTMLElement & { timeout?: ReturnType<typeof setTimeout> }

export interface ToastShowProps {
  duration?: number
  maskClickable?: boolean
  position?: string
  portal?: HTMLElement
  id?: string
  maskClassName?: string
  maskStyle?: CSSProperties
  className?: string
  style?: CSSProperties
  content?: string
  onOpen?: () => void
  onClose?: () => void
}
