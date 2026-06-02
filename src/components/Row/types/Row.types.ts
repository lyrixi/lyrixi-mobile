import type { CSSProperties, ReactNode } from 'react'

export interface RowProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface RowRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
