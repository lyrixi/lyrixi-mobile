import type { ClipboardEventHandler } from 'react'

export interface InputOTPInputTextRef {
  focus: (index: number) => void
  blur: () => void
}

export interface InputOTPInputTextProps {
  // Value & Display Value
  values: string[]
  // Status
  disabled?: boolean
  readOnly?: boolean
  // Events
  onChange: (index: number, value: string) => void
  onKeyDown: (key: string, index: number) => void
  onPaste?: ClipboardEventHandler<HTMLInputElement>
}
