import type { CSSProperties } from 'react'

export interface SignatureModalProps {
  value?: string
  open?: boolean
  modalClassName?: string
  modalStyle?: CSSProperties
  portal?: Element
  color?: string
  backgroundColor?: string
  onChange?: (base64: string | null) => void
  onOpen?: () => void
  onClose?: () => void
}

export interface SignatureModalRef {
  modalElement: HTMLElement | null
  getModalElement: () => HTMLElement | null
}
