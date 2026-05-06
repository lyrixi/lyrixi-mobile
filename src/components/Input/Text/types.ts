import type {
  CompositionEventHandler,
  CSSProperties,
  FocusEvent,
  FormEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  TouchEvent
} from 'react'

export type TextInputElement = (HTMLInputElement | HTMLTextAreaElement) & {
  composing?: boolean
  preventBlur?: boolean
}

export interface InputTextRef {
  element: HTMLDivElement | null
  inputElement: TextInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => TextInputElement | null
  correctValue: (val: string | number) => string | number
  focus: () => void
  blur: () => void
}

export interface InputTextProps {
  id?: string
  name?: string
  type?: string
  value?: string
  placeholder?: string
  formatter?: (value: string) => ReactNode
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  autoFocus?: boolean
  autoSelect?: boolean
  enableCompositionEnd?: boolean
  style?: CSSProperties
  className?: string
  inputRender?: (params: Record<string, unknown>) => ReactNode
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent | TouchEvent) => void
    onTouchStart?: (e?: TouchEvent) => void
  }) => ReactNode | undefined
  precision?: number
  trim?: boolean
  max?: number
  min?: number
  maxLength?: number
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>['enterKeyHint']
  autoComplete?: string
  autoCorrect?: string
  spellCheck?: boolean | 'true' | 'false'
  cursor?: boolean | null
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onChange?: (value: string, meta?: { action: string }) => void
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onInput?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionStart?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export interface InputRenderClearParams {
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent | TouchEvent) => void
    onTouchStart?: (e?: TouchEvent) => void
  }) => ReactNode | undefined
  allowClear?: boolean
  value?: string
  onClear: (e?: MouseEvent | TouchEvent) => void
  onTouchStart?: (e?: TouchEvent) => void
}
