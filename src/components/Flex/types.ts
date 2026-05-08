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

export type FlexCompactDirection = 'horizontal' | 'vertical'

export type FlexCompactSizeToken = 's' | 'm' | 'l'

export interface FlexCompactContextValue {
  block?: boolean
  size?: FlexCompactSizeToken | string
  direction?: FlexCompactDirection | string
}

export interface FlexCompactRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FlexCompactProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 在子节点之间插入的分隔节点 */
  separator?: ReactNode
  separatorStyle?: CSSProperties
  separatorClassName?: string
  block?: boolean
  size?: FlexCompactSizeToken | string
  direction?: FlexCompactDirection | string
  radius?: FlexCompactSizeToken | string
}
