import type { CSSProperties } from 'react'

export interface InputPasswordStrengthRef {
  element: HTMLUListElement | null
  getElement: () => HTMLUListElement | null
  getStrength: (newValue?: string) => number
}

export interface InputPasswordStrengthProps {
  value?: string
  className?: string
  style?: CSSProperties
}
