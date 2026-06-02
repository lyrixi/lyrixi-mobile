import type { CSSProperties, ReactNode } from 'react'

export interface MessageIconRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageIconProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
