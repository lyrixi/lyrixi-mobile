import type { CSSProperties, ReactNode } from 'react'

import type { TabBarItem, TabBarValue } from './../types'

export interface TabsProps {
  value?: TabBarValue
  list?: TabBarItem[]
  separator?: ReactNode
  gap?: string | number
  style?: CSSProperties
  className?: string
  disabled?: boolean
  descriptionPosition?: string
  onChange?: (item: TabBarItem) => void
}

export interface TabsRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
