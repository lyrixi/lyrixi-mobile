import type {
  CompositionEventHandler,
  CSSProperties,
  FocusEvent,
  FormEventHandler,
  MouseEvent,
  ReactNode,
  RefObject
} from 'react'

import type { InputTextProps, InputTextRef } from './Input.Text.types'

export interface NumberBoxRef {
  element: HTMLDivElement | null
  inputElement: InputTextRef | null
  getElement: () => HTMLDivElement | null
  getInputElement: InputTextRef['getInputElement'] | undefined
  getInputRef: () => RefObject<InputTextRef | null>
}

export interface NumberBoxProps {
  id?: string
  name?: string
  value?: string
  placeholder?: string
  formatter?: (value: string) => ReactNode
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  autoFocus?: boolean
  autoSelect?: boolean
  stepFocus?: boolean
  className?: string
  style?: CSSProperties
  plusClassName?: string
  plusStyle?: CSSProperties
  minusClassName?: string
  minusStyle?: CSSProperties
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputTextProps['clearRender']
  children?: ReactNode
  precision?: number
  trim?: boolean
  min?: number
  max?: number
  maxLength?: number
  onClick?: (e: MouseEvent) => void
  onChange?: (val: string) => void
  onBlur?: (e: FocusEvent) => void
  onFocus?: (e: FocusEvent) => void
  onInput?: FormEventHandler<HTMLInputElement>
  onCompositionStart?: CompositionEventHandler<HTMLInputElement>
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement>
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement>
}
