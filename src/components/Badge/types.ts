import type { CSSProperties, ReactNode } from 'react'

export interface BadgeProps {
  children?: ReactNode
  style?: CSSProperties
  className?: string
  maxLength?: number
  ellipsis?: string
}

export interface BadgeRef {
  element: HTMLSpanElement | null
  getElement: () => HTMLSpanElement | null
}
