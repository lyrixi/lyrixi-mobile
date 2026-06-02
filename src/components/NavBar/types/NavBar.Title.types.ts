import type { CSSProperties, ReactNode } from 'react'

export interface NavBarTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface NavBarTitleProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
