import type { CSSProperties, ReactNode } from 'react'

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'horizontal' | 'vertical'

export interface FlexProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  gap?: string | number
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  wrap?: boolean | 'scroll'
}

export interface FlexRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export type FlexStyleInput = Pick<FlexProps, 'gap' | 'justify' | 'align' | 'direction' | 'wrap'>
