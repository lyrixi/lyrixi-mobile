import type { CSSProperties } from 'react'

export interface ComboAddProps {
  value?: string
  className?: string
  style?: CSSProperties
  modalClassName?: string
  modalStyle?: CSSProperties
  color?: string
  backgroundColor?: string
  onChange?: (base64: string | null) => void
}

export interface ComboAddRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
