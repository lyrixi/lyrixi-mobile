import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface MessageButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageButtonProps {
  className?: string
  style?: CSSProperties
  block?: boolean
  color?: string
  backgroundColor?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}
