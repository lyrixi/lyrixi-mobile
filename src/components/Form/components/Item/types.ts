import type { CSSProperties, ReactNode } from 'react'

export interface FormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FormItemProps {
  id?: string
  name?: string
  style?: CSSProperties
  className?: string
  layout?: string
  children?: ReactNode
}

export interface ItemProps extends FormItemProps {
  height?: number
}

export interface VirtualFormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface VirtualFormItemProps {
  height?: number
  id?: string
  name?: string
  style?: CSSProperties
  className?: string
  layout?: string
  children?: ReactNode
}
