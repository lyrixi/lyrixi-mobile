import type { CSSProperties, ReactNode } from 'react'

import type { TabBarItem, TabBarValue } from './TabBar.base.types'

export interface TabBarSlideProps {
  separator?: ReactNode
  value?: TabBarValue
  list?: TabBarItem[]
  className?: string
  disabled?: boolean
  descriptionPosition?: string
  onChange?: (item: TabBarItem) => void
  style?: CSSProperties
}

export interface TabBarSlideRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
