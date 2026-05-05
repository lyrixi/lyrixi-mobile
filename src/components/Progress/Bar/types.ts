import type { CSSProperties } from 'react'

export type ProgressBarStyle = CSSProperties & { [key: string]: string | number | undefined }

export interface ProgressBarProps {
  percent?: number
  className?: string
  style?: ProgressBarStyle
}

export interface ProgressBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
