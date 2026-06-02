import type { CSSProperties, ReactNode } from 'react'

export interface MessageTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageTitleProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
