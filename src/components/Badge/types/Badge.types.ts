import type { CSSProperties, ReactNode } from 'react'

export interface BadgeProps {
  // Value & Display Value
  children?: ReactNode
  // Style
  style?: CSSProperties
  className?: string
    maxLength?: number
  ellipsis?: string
}

export interface BadgeRef {
  element: HTMLSpanElement | null
  getElement: () => HTMLSpanElement | null
}
