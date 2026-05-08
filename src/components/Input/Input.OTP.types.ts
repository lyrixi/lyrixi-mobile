import type { ClipboardEventHandler, CSSProperties, ReactNode } from 'react'

export interface OTPRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  focus: (itemIndex?: number) => void
  blur: () => void
}

export interface OTPInputRef {
  focus: (index: number) => void
  blur: () => void
}

export interface OTPProps {
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

export interface OTPInputTextRef {
  focus: (index: number) => void
  blur: () => void
}

export interface OTPInputTextProps {
  values: string[]
  disabled?: boolean
  readOnly?: boolean
  onChange: (index: number, value: string) => void
  onKeyDown: (key: string, index: number) => void
  onPaste?: ClipboardEventHandler<HTMLInputElement>
}

export interface OTPInputNumberRef {
  focus: (index: number) => void
  blur: () => void
}

export interface OTPInputNumberProps {
  values: string[]
  disabled?: boolean
  readOnly?: boolean
  onChange: (index: number, value: string) => void
  onKeyDown: (key: string, index: number) => void
  onPaste?: ClipboardEventHandler<HTMLDivElement>
}
