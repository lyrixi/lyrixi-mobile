import type { CSSProperties, ReactNode } from 'react'

export interface PageAsideProps {
  safeArea?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface PageAsideRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
