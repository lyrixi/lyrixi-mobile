import type { CSSProperties } from 'react'

import type { SelectorEllipsis, SelectorItem } from './Selector.core.types'

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
