import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface ComboProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
