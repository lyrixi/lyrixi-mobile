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

export interface ColProps {
  span?: number | string
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface ColRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
