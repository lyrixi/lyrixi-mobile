import type { CSSProperties } from 'react'

export interface LoadingSpinFadeProps {
  // Value & Display Value
  color?: string
  size?: string | number
  // Style
  style?: CSSProperties
  className?: string
}

export interface LoadingSpinFadeRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
