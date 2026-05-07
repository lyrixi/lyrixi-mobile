import type { CSSProperties, ReactNode } from 'react'

import type { TabBarItem, TabBarValue } from './../types'

export interface TabBarGroupProps {
  separator?: ReactNode
  value?: TabBarValue
  list?: TabBarItem[]
  className?: string
  disabled?: boolean
  descriptionPosition?: string
  onChange?: (item: TabBarItem) => void
  style?: CSSProperties
}

export interface TabBarGroupRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
