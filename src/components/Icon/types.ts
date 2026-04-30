import type { CSSProperties, MouseEventHandler, ReactNode, TouchEventHandler } from 'react'

export interface IconProps {
  disabled?: boolean
  color?: string
  backgroundColor?: string
  size?: string
  radius?: string
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLElement>
  onTouchStart?: TouchEventHandler<HTMLElement>
}

export interface IconRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface IconStyleInput {
  color?: string
  backgroundColor?: string
  size?: string
  radius?: string
  style?: CSSProperties
  className?: string
}
