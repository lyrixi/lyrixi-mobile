import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface NavBarButtonProps {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  style?: CSSProperties
  className?: string
  disabled?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}
