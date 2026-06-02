import type { CSSProperties } from 'react'

export interface InputOTPRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  focus: (itemIndex?: number) => void
  blur: () => void
}

/**
 * OTP：与 Node 系控件一致的展示类字段（className / style / disabled / readOnly），
 * 受控值为 `string[]`（每位一段 string）。
 */
export interface InputOTPProps {
  type?: string
  // Value & Display Value
  value?: string[]
    maxLength?: number
  // Events
  onChange?: (value: string[]) => void
  onComplete?: (value: string[]) => void
  // Style
  className?: string
  style?: CSSProperties
  // Status
  disabled?: boolean
  readOnly?: boolean
}
