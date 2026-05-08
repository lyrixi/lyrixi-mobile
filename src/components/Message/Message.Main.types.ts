import type { CSSProperties, ReactNode } from 'react'

export interface MessageMainRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface MessageMainProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
}
