import type { CSSProperties, ReactNode } from 'react'

export interface CompactContextValue {
  block?: boolean
  size?: string
  direction?: string
}

export interface CompactProps {
  style?: CSSProperties
  className?: string
  children?: ReactNode
  /** 在子节点之间插入的分隔节点 */
  separator?: ReactNode
  block?: boolean
  size?: string
  direction?: string
  radius?: string
}
