import type { CSSProperties } from 'react'

export interface LoadingOuroborosProps {
  color?: string
  size?: string | number
  style?: CSSProperties
  className?: string
}

export interface LoadingOuroborosRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
