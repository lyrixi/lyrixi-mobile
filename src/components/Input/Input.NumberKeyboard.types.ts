import type { ReactNode } from 'react'

import type { InputNodeProps, InputNodeRef } from './Input.Node.types'

/** 数字键盘：展示层为 Node，受控值为字符串数字片段。 */
export interface InputNumberKeyboardProps extends Omit<InputNodeProps, 'value' | 'onChange'> {
  ok?: ReactNode | null
  value?: string
  onChange?: (value: string) => void
}

export type InputNumberKeyboardRef = InputNodeRef
