import type { CSSProperties, ReactNode } from 'react'

export interface MessageIconRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageIconProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
