import type { CSSProperties } from 'react'

export interface ButtonGetStyleParams {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[] | unknown
  sizeEqual?: boolean
  fontSize?: string | number | unknown
  radius?: string | number | unknown
  style?: CSSProperties
  className?: string
}
