import type { CSSProperties, ReactNode } from 'react'

export type PageLayout = 'horizontal' | 'vertical'

export interface PageProps {
  // Value & Display Value
  full?: boolean
  layout?: PageLayout
  animation?: string
  // Status
  safeArea?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface PageRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
