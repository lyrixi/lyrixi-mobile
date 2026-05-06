import type { CSSProperties, ReactNode } from 'react'

export interface MessageFooterRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface MessageFooterProps {
  layout?: string
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
