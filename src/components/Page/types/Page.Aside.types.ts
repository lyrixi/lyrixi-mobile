import type { CSSProperties, ReactNode } from 'react'

export interface PageAsideProps {
  // Status
  safeArea?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}

export interface PageAsideRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
