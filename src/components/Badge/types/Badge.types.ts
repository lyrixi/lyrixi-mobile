import type { CSSProperties, ReactNode } from 'react'

export interface BadgeProps {
  // Value & Display Value
  count?: number | undefined | null
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  maxCount?: number
  ellipsis?: string
  children?: ReactNode
}

export interface BadgeRef {
  element: HTMLSpanElement | null
  getElement: () => HTMLSpanElement | null
}
