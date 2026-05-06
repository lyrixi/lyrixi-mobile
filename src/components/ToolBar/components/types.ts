import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface ComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ComboProps {
  open?: boolean | null
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
  arrowRender?: (props: { open: boolean | null }) => ReactNode
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}
