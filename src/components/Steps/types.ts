import type { CSSProperties, ReactNode } from 'react'

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

export interface StepsNodeProps {
  iconChildren?: ReactNode
  iconRender?: (params: { children: ReactNode; className: string; status?: string }) => ReactNode
  status?: string
  rail?: boolean
  title?: ReactNode
  description?: ReactNode
}
