import type { CSSProperties, ReactNode } from 'react'

export type ProgressCircleStyle = CSSProperties & { [key: string]: string | number | undefined }

export interface ProgressCircleProps {
  // Value & Display Value
  percent?: number
  size?: number
  // Style
  style?: ProgressCircleStyle
  className?: string
  // Elements
  children?: ReactNode
}

export interface ProgressCircleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
