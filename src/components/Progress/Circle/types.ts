import type { CSSProperties, ReactNode } from 'react'

export type ProgressCircleStyle = CSSProperties & { [key: string]: string | number | undefined }

export interface ProgressCircleProps {
  percent?: number
  children?: ReactNode
  size?: number
  style?: ProgressCircleStyle
  className?: string
}

export interface ProgressCircleRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
