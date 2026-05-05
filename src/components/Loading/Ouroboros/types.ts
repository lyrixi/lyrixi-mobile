import type { CSSProperties } from 'react'

export interface OuroborosProps {
  color?: string
  size?: string | number
  style?: CSSProperties
  className?: string
}

export interface OuroborosRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
