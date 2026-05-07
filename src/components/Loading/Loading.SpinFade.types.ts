import type { CSSProperties } from 'react'

export interface SpinFadeProps {
  color?: string
  size?: string | number
  style?: CSSProperties
  className?: string
}

export interface SpinFadeRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
