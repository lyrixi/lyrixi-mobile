import type { CSSProperties } from 'react'

export interface AmountProps {
  precision?: number
  currencySymbol?: string
  style?: CSSProperties
  className?: string
  noStyle?: boolean
  children?: number | string
}
