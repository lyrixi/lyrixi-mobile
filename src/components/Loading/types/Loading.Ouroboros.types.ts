import type { CSSProperties } from 'react'

export interface LoadingOuroborosProps {
  // Value & Display Value
  color?: string
  size?: string | number
  // Style
  style?: CSSProperties
  className?: string
}

export interface LoadingOuroborosRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
