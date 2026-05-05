import type { CSSProperties, ReactNode } from 'react'

export interface FooterBarRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface FooterBarProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}
