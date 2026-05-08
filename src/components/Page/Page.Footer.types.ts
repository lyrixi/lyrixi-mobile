import type { CSSProperties, ReactNode } from 'react'

export interface PageFooterProps {
  safeArea?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  buttons?: unknown
  onChange?: (newValue: unknown) => void
}

export interface PageFooterRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
