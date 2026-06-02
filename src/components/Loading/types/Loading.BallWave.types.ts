import type { CSSProperties } from 'react'

export interface LoadingBallWaveProps {
  // Value & Display Value
  color?: string
  size?: string | number
  // Style
  style?: CSSProperties
  className?: string
}

export interface LoadingBallWaveRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
