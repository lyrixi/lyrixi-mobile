import type {
  CompositionEventHandler,
  CSSProperties,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  TouchEvent
} from 'react'

/** 选择类列表项；可携带任意透传字段，但 value 不会是 DOM。 */
export type InputSelectItem = {
  id?: string | number
  name?: ReactNode
  checked?: boolean
  className?: string
  style?: CSSProperties
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  [key: string]: unknown
}

/**
 * Node 展示层受控值：仅 `InputSelectItem`、`Date`、`string`、`null` 及其数组。
 * 不包含 number/ReactNode/DOM；`undefined` 表示未传受控值。
 */
export type InputNodeValue =
  | string
  | null
  | undefined
  | Date
  | InputSelectItem
  | InputSelectItem[]
  | Date[]
  | (Date | null)[]

/** Node（div 展示层）对外 ref。 */
export interface InputNodeRef {
  element: HTMLDivElement | null
  inputElement: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLDivElement | null
  correctValue: (val: string | number) => string | number
  focus: () => void
  blur: () => void
}

export interface InputNodeProps {
  id?: string
  type?: string
  value?: InputNodeValue
  placeholder?: string
  formatter?: (value: InputNodeValue) => ReactNode
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  /** div 层光标展示；与原生 input 的 Text 获焦语义不同 */
  cursor?: boolean | null
  style?: CSSProperties
  className?: string
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
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onChange?: (value: InputNodeValue, meta?: { action: string }) => void
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onCompositionStart?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
