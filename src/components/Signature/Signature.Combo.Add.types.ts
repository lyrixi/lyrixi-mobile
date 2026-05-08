import type { CSSProperties } from 'react'

export interface SignatureComboAddProps {
  value?: string
  className?: string
  style?: CSSProperties
  modalClassName?: string
  modalStyle?: CSSProperties
  color?: string
  backgroundColor?: string
  onChange?: (base64: string | null) => void
}

export interface SignatureComboAddRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
