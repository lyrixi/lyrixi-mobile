import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface CardProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface CardRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CardHeaderProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface CardHeaderRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CardMainProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface CardMainRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
