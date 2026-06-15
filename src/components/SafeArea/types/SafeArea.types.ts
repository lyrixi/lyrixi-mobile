import type { CSSProperties } from 'react'

export type SafeAreaType = 'height' | 'padding' | 'margin' | 'border' | 'before' | 'after'
export type SafeAreaPlacement = 'top' | 'bottom'

export interface SafeAreaProps {
  // Value & Display Value
  type?: SafeAreaType
  placement?: SafeAreaPlacement
  // Style
  style?: CSSProperties
  className?: string
}

export interface SafeAreaRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
