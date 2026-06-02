import type { CSSProperties, ReactNode } from 'react'

export interface RowColProps {
  // Value & Display Value
  span?: number | string
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface RowColRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
