import type { CSSProperties, ReactNode } from 'react'

import type { TabBarItem, TabBarValue } from './TabBar.base.types'

export interface TabBarTabsProps {
  // Value & Display Value
  value?: TabBarValue
  list?: TabBarItem[]
  separator?: ReactNode
  gap?: string | number
  descriptionPosition?: string
  // Status
  disabled?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onChange?: (item: TabBarItem) => void
}

export interface TabBarTabsRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
