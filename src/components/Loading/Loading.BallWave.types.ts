import type { CSSProperties } from 'react'

export interface LoadingBallWaveProps {
  color?: string
  size?: string | number
  style?: CSSProperties
  className?: string
}

export interface LoadingBallWaveRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
