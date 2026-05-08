import type { CSSProperties, ReactNode } from 'react'

export interface MessageHeaderRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface MessageHeaderProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
