import type { CSSProperties, ReactNode } from 'react'

export interface NavBarRightRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface NavBarRightProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
