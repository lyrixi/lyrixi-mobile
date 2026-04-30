import type { CSSProperties } from 'react'

export type SafeAreaType = 'height' | 'padding' | 'margin' | 'border' | 'before' | 'after'
export type SafeAreaPosition = 'top' | 'bottom'

export interface SafeAreaProps {
  type?: SafeAreaType
  position?: SafeAreaPosition
  style?: CSSProperties
  className?: string
}

export interface SafeAreaRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
