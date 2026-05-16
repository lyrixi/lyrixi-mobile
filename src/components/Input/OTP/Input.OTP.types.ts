import type { ClipboardEventHandler, CSSProperties } from 'react'

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

/**
 * OTP：与 Node 系控件一致的展示类字段（className / style / disabled / readOnly），
 * 受控值为 `string[]`（每位一段 string）。
 */
export interface InputOTPProps {
  type?: string
  value?: string[]
  maxLength?: number
  onChange?: (value: string[]) => void
  onComplete?: (value: string[]) => void
  className?: string
  style?: CSSProperties
  disabled?: boolean
  readOnly?: boolean
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
