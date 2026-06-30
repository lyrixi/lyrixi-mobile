import type { CSSProperties, ReactNode } from 'react'

export interface NavBarLeftRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface NavBarLeftProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
