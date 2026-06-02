import type { CSSProperties, ReactNode } from 'react'

export interface PageFooterProps {
  // Value & Display Value
  buttons?: unknown
  // Status
  safeArea?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
  // Events
  onChange?: (newValue: unknown) => void
}

export interface PageFooterRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
