import type { ClipboardEventHandler, CSSProperties, ReactNode } from 'react'

export interface InputOTPRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  focus: (itemIndex?: number) => void
  blur: () => void
}

export interface InputOTPInputRef {
  focus: (index: number) => void
  blur: () => void
}

export interface InputOTPProps {
  type?: string
  value?: unknown[]
  disabled?: boolean
  readOnly?: boolean
  className?: string
  style?: CSSProperties
  maxLength?: number
  onChange?: (value: string[]) => void
  onComplete?: (value: string[]) => void
}

export interface InputOTPInputTextRef {
  focus: (index: number) => void
  blur: () => void
}

export interface InputOTPInputTextProps {
  values: string[]
  disabled?: boolean
  readOnly?: boolean
  onChange: (index: number, value: string) => void
  onKeyDown: (key: string, index: number) => void
  onPaste?: ClipboardEventHandler<HTMLInputElement>
}

export interface InputOTPInputNumberRef {
  focus: (index: number) => void
  blur: () => void
}

export interface InputOTPInputNumberProps {
  values: string[]
  disabled?: boolean
  readOnly?: boolean
  onChange: (index: number, value: string) => void
  onKeyDown: (key: string, index: number) => void
  onPaste?: ClipboardEventHandler<HTMLDivElement>
}
