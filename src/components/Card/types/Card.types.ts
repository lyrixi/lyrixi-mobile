import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface CardProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface CardRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
