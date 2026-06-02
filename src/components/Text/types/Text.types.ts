import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface TextEllipsisConfig {
  rows?: number
  expandable?: boolean
  defaultExpanded?: boolean
}

export interface TextProps {
  // Value & Display Value
  highlight?: string | string[]
  // Status
  ellipsis?: TextEllipsisConfig
  // Style
  color?: string
  fontSize?: string | number
  fontWeight?: string | number
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface TextRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface TextGetDisplayValueOptions {
  maxCount?: number
  precision?: number
}
