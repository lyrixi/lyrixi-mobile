import type { ReactNode } from 'react'

export interface StepsListItem {
  id?: string
  icon?: ReactNode
  status?: string
  title?: ReactNode
  description?: ReactNode
}

export interface StepsValue {
  index?: number
  id?: string
  status?: string
  activeIndex?: number
  icon?: ReactNode
}
