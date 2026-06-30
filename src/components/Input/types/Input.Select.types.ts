import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputNodeProps, InputNodeValue, InputSelectItem } from './Input.Node.types'

export type { InputSelectItem } from './Input.Node.types'

/** 与 `InputNodeValue` 对齐：选择类控件受控值。 */
export type InputSelectValue = InputNodeValue

export interface InputSelectRef {
  displayValue: string
  getDisplayValue: (newValue?: InputSelectValue) => string
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

/**
 * Select.Combo / Tags 等：继承 `InputNodeProps` 并补充 name、组合展示等；
 * `formatter` / `onChange` / `value` 按选择场景收窄。
 */
export interface InputSelectProps extends Omit<InputNodeProps, 'value' | 'formatter' | 'onChange'> {
  name?: string
  value?: InputSelectValue
  formatter?: (value: InputSelectValue, options?: { separator?: string }) => string
  onChange?: (value: InputSelectValue, options?: unknown) => void
  autoFocus?: boolean
  autoSelect?: boolean
  enableCompositionEnd?: boolean
  inputRender?: (options: Record<string, unknown>) => ReactNode
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  onSearch?: (value: string) => void
  step?: number
  iconRender?: (options: { className: string; style?: CSSProperties }) => ReactNode
  mode?: string
  autoSize?: boolean
  separator?: string
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: InputSelectItem) => void
}
