import type { CSSProperties, ReactNode } from 'react'

export type PageLayout = 'horizontal' | 'vertical'

export interface PageProps {
  safeArea?: boolean
  full?: boolean
  layout?: PageLayout
  animation?: string
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface PageRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
