import type { CSSProperties, ReactNode } from 'react'

/** 列表项 */
export interface SelectorItem {
  id?: string | number
  name?: ReactNode
}

/** 超出条数时折叠为「更多」 */
export interface SelectorEllipsis {
  count: number
}

export interface SelectorProps {
  value?: SelectorItem[]
  list: SelectorItem[]
  ellipsis?: SelectorEllipsis
  disabled?: boolean
  multiple?: boolean
  allowClear?: boolean
  className?: string
  style?: CSSProperties
  columns?: number
  id?: string
  onChange?: (value: SelectorItem[]) => void | Promise<void>
}

export interface SelectorRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  instance: { equalsItem: (a: SelectorItem, b: SelectorItem) => boolean }
  getInstance: () => { equalsItem: (a: SelectorItem, b: SelectorItem) => boolean }
}

export interface SelectorItemProps {
  children?: ReactNode
  disabled?: boolean
  checked?: boolean
  className?: string
  style?: CSSProperties
  onChange?: (checked: boolean) => void
}

export type SelectorItemRef = {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}
