import type { CSSProperties, ReactNode } from 'react'

export interface DividerProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface DividerRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
