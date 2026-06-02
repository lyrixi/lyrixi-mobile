import type { CSSProperties, ReactNode } from 'react'

import type { TabBarItem, TabBarValue } from './TabBar.base.types'

export interface TabBarSlideProps {
  // Value & Display Value
  separator?: ReactNode
  value?: TabBarValue
  list?: TabBarItem[]
  descriptionPosition?: string
  // Status
  disabled?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Events
  onChange?: (item: TabBarItem) => void
}

export interface TabBarSlideRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
