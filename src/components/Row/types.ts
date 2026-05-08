import type { CSSProperties, ReactNode } from 'react'

export interface RowProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface RowRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface RowColProps {
  span?: number | string
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface RowColRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
