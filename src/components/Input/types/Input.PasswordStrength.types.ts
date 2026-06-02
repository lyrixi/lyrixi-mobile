import type { CSSProperties } from 'react'

export interface InputPasswordStrengthRef {
  element: HTMLUListElement | null
  getElement: () => HTMLUListElement | null
  getStrength: (newValue?: string) => number
}

export interface InputPasswordStrengthProps {
  // Value & Display Value
  value?: string
  // Style
  className?: string
  style?: CSSProperties
}
