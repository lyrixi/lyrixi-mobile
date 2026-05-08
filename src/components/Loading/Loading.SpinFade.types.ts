import type { CSSProperties } from 'react'

export interface LoadingSpinFadeProps {
  color?: string
  size?: string | number
  style?: CSSProperties
  className?: string
}

export interface LoadingSpinFadeRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
