import type { CSSProperties, ReactNode } from 'react'
import type QRLib from './instance'

export interface QRCodeProps {
  style?: CSSProperties
  text?: string
  children?: ReactNode
  className?: string
}

export interface QRCodeRef {
  element: HTMLSpanElement | null
  instance: QRLib | null
  getElement: () => HTMLSpanElement | null
  getInstance: () => QRLib | null
}
