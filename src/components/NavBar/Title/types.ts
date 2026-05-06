import type { CSSProperties, ReactNode } from 'react'

export interface NavBarTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface NavBarTitleProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
