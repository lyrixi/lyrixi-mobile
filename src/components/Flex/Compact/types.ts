import type { CSSProperties, ReactNode } from 'react'

export type CompactDirection = 'horizontal' | 'vertical'

export type CompactSizeToken = 's' | 'm' | 'l'

export interface CompactContextValue {
  block?: boolean
  size?: CompactSizeToken | string
  direction?: CompactDirection | string
}

export interface CompactRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CompactProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 在子节点之间插入的分隔节点 */
  separator?: ReactNode
  separatorStyle?: CSSProperties
  separatorClassName?: string
  block?: boolean
  size?: CompactSizeToken | string
  direction?: CompactDirection | string
  radius?: CompactSizeToken | string
}
