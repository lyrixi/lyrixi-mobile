import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

import type { IconProps } from './../Icon/types'

export type ButtonIconProps = IconProps

export interface ButtonProps {
  id?: string
  direction?: 'horizontal' | 'vertical' | string
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

export interface ButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ButtonTextProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export interface ButtonTextRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface GetStyleParams {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[] | unknown
  sizeEqual?: boolean
  fontSize?: string | number | unknown
  radius?: string | number | unknown
  style?: CSSProperties
  className?: string
}
