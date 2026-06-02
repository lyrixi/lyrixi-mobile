import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface MessageButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageButtonProps {
  // Value & Display Value
  block?: boolean
  color?: string
  backgroundColor?: string
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}
