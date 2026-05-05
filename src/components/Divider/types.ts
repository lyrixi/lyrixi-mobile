import type { CSSProperties, ReactNode } from 'react'

export interface DividerProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface DividerRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
