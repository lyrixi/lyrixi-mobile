import type { CSSProperties } from 'react'

export interface HideOptions {
  onClose?: () => void
}

export interface ShowProps {
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
