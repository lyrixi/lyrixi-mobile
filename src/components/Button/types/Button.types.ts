import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface ButtonProps {
  // Value & Display Value
  id?: string
  direction?: 'horizontal' | 'vertical' | string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  // Status
  disabled?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
