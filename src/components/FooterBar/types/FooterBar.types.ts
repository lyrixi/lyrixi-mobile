import type { CSSProperties, ReactNode } from 'react'

export interface FooterBarRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface FooterBarProps {
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
