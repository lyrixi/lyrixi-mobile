import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface TextEllipsisConfig {
  rows?: number
  expandable?: boolean
  defaultExpanded?: boolean
}

export interface TextProps {
  highlight?: string | string[]
  ellipsis?: TextEllipsisConfig
  color?: string
  fontSize?: string | number
  fontWeight?: string | number
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface TextRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface TextEllipsisProps {
  ellipsis?: TextEllipsisConfig
  children?: ReactNode
}

export interface TextGetDisplayValueOptions {
  maxCount?: number
  precision?: number
}
