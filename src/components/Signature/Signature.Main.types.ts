import type { CSSProperties } from 'react'

export interface SignatureMainDrawProps {
  suffix?: string
  quality?: number
  style?: CSSProperties
  color?: string
  backgroundColor?: string
  lineWidth?: number
}

export interface SignatureMainDrawRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getBase64: () => Promise<string | null>
  clear: () => void
}

export interface SignatureMainProps {
  style?: CSSProperties
  color?: string
  backgroundColor?: string
  onChange?: (base64: string | null) => void
  onCancel?: () => void
}

export interface SignatureMainRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getBase64?: (() => Promise<string | null>) | undefined
  clear?: (() => void) | undefined
}
