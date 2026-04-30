import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface ComboProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
