import type { CSSProperties, ReactNode } from 'react'

export interface PageHeaderProps {
  // Status
  safeArea?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}

export interface PageHeaderRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
