import type { CSSProperties, ReactNode } from 'react'

export interface MessageHeaderRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface MessageHeaderProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
