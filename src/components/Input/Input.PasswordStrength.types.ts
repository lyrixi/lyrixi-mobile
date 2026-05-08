import type { CSSProperties } from 'react'

export interface PasswordStrengthRef {
  element: HTMLUListElement | null
  getElement: () => HTMLUListElement | null
  getStrength: (newValue?: string) => number
}

export interface PasswordStrengthProps {
  value?: string
  className?: string
  style?: CSSProperties
}
