import type { CSSProperties } from 'react'

export interface IFrameRef {
  element: HTMLIFrameElement | null
}

export interface IFrameProps {
  // Value & Display Value
  src?: string
  data?: unknown
  // Style
  style?: CSSProperties
  className?: string
}
