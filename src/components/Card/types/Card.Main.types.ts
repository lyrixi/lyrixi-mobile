import type { CSSProperties, ReactNode } from 'react'

export interface CardMainProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface CardMainRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
