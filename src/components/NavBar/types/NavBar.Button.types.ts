import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

import type { ButtonColor, ButtonVariant } from '../../Button/types'

export interface NavBarButtonProps {
  // Value & Display Value
  direction?: string
  block?: boolean
  variant?: ButtonVariant
  color?: ButtonColor
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
