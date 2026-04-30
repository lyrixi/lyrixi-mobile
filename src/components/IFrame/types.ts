import type { CSSProperties } from 'react'

export interface IFrameRef {
  element: HTMLIFrameElement | null
}

export interface IFrameProps {
  src?: string
  data?: unknown
  style?: CSSProperties
  className?: string
}
