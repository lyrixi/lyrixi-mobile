import type { CSSProperties, ReactNode } from 'react'

export interface PageHeaderProps {
  safeArea?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface PageHeaderRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
