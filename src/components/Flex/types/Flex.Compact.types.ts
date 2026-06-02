import type { CSSProperties, ReactNode } from 'react'

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
  // Value & Display Value
  separator?: ReactNode
  block?: boolean
  size?: FlexCompactSizeToken | string
  direction?: FlexCompactDirection | string
  radius?: FlexCompactSizeToken | string
  // Style
  style?: CSSProperties
  className?: string
  separatorStyle?: CSSProperties
  separatorClassName?: string
  // Elements
  children?: ReactNode
}
