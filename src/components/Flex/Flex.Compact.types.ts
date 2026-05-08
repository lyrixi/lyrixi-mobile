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
