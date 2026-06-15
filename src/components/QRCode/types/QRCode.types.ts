import type { CSSProperties, ReactNode } from 'react'
import type { QRLib } from '../instance'

export interface QRCodeProps {
  // Value & Display Value
  text?: string
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface QRCodeRef {
  element: HTMLSpanElement | null
  instance: QRLib | null
  getElement: () => HTMLSpanElement | null
  getInstance: () => QRLib | null
}
