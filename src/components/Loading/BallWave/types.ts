import type { CSSProperties } from 'react'

export interface BallWaveProps {
  color?: string
  size?: string | number
  style?: CSSProperties
  className?: string
}

export interface BallWaveRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
