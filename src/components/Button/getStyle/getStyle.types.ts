import type { CSSProperties } from 'react'

import type { ButtonColor } from '../types/Button.Color.types'
import type { ButtonVariant } from '../types/Button.Variant.types'

export interface ButtonGetStyleParams {
  direction?: string
  block?: boolean
  variant?: ButtonVariant
  color?: ButtonColor
  size?: string | number | readonly string[] | unknown
  sizeEqual?: boolean
  fontSize?: string | number | unknown
  radius?: string | number | unknown
  style?: CSSProperties
  className?: string
}
