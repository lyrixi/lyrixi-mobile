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
  height?: number
  children?: ReactNode
}

export interface VirtualFormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export type VirtualFormItemProps = FormItemProps
