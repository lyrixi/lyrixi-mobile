import type { CSSProperties, ReactNode } from 'react'

export interface MessageFooterRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface MessageFooterProps {
  // Value & Display Value
  layout?: string
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
