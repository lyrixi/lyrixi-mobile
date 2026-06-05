import type { ClipboardEventHandler } from 'react'

import type { InputSize } from '../types/Input.Size.types'

export interface InputOTPInputNumberRef {
  focus: (index: number) => void
  blur: () => void
}

export interface InputOTPInputNumberProps {
  // Value & Display Value
  values: string[]
  // Status
  disabled?: boolean
  readOnly?: boolean
  size?: InputSize
  // Events
  onChange: (index: number, value: string) => void
  onKeyDown: (key: string, index: number) => void
  onPaste?: ClipboardEventHandler<HTMLDivElement>
}
