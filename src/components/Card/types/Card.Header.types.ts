import type { CSSProperties, ReactNode } from 'react'

export interface CardHeaderProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface CardHeaderRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
