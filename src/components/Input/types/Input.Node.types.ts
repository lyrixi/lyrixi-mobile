import type {
  ComponentType,
  CompositionEventHandler,
  CSSProperties,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  SVGProps,
  TouchEvent
} from 'react'

import type { InputSize } from './Input.Size.types'

/** 选择类列表项；可携带任意透传字段，但 value 不会是 DOM。 */
export type InputSelectItem = {
  id?: string | number
  name?: string
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
  | number
  | string
  | null
  | Date
  | (Date | null | string | number)[]
  | InputSelectItem
  | InputSelectItem[]

/** Node（div 展示层）对外 ref。 */
export interface InputNodeRef {
  element: HTMLDivElement | null
  inputElement: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLDivElement | null
  correctValue: (val: string) => string
  focus: () => void
  blur: () => void
}

export interface InputNodeProps {
  id?: string
  type?: string
  // Value & Display Value
  value?: InputNodeValue
  placeholder?: string
  formatter?: (value: InputNodeValue) => ReactNode
  // Status
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  cursor?: boolean | null
  style?: CSSProperties
  // Style
  size?: InputSize
  className?: string
  // Elements
  leftIconRender?: () => ReactNode
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  rightIconRender?: () => ReactNode
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  clearRender?: (options: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
    onTouchStart?: (e?: TouchEvent<HTMLElement>) => void
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
  // Events
  onChange?: (value: InputNodeValue, meta?: { action: string }) => void
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onCompositionStart?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
