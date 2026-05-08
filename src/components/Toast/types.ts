import type { CSSProperties } from 'react'

export interface ToastHideOptions {
  onClose?: () => void
}

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
