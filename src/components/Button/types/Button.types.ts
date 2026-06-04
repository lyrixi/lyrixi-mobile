import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

import type { ButtonColor } from './Button.Color.types'
import type { ButtonVariant } from './Button.Variant.types'

export interface ButtonProps {
  // Value & Display Value
  id?: string
  direction?: 'horizontal' | 'vertical' | string
  block?: boolean
  variant?: `${ButtonVariant}`
  color?: `${ButtonColor}`
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
