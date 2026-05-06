import type { CSSProperties, ReactNode } from 'react'

export interface MessageTitleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageTitleProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
