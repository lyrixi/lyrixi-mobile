import type { CSSProperties } from 'react'

import type { StepsListItem, StepsValue } from './Steps.core.types'

export interface StepsProps {
  value?: StepsValue
  list?: StepsListItem[]
  style?: CSSProperties
  className?: string
  iconSize?: number
  align?: string
  direction?: string
}

export interface StepsRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
