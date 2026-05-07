import type { CSSProperties } from 'react'

import type { ComboAddRef } from './Add/types'
import type { EditRef } from './Edit/types'

export interface SignatureComboProps {
  value?: string
  allowClear?: boolean
  className?: string
  style?: CSSProperties
  modalClassName?: string
  modalStyle?: CSSProperties
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: Element
  color?: string
  backgroundColor?: string
  onChange?: (base64: string | null) => void
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export type SignatureComboRef = ComboAddRef | EditRef
