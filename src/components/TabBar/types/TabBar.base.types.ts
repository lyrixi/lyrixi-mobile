import type { ReactNode } from 'react'

export interface TabBarItem {
  id?: string | number
  name?: ReactNode
  description?: ReactNode
  placeholder?: ReactNode
  disabled?: boolean
  iconRender?: (params: Record<string, unknown>) => ReactNode
  content?: ReactNode | ((params: Record<string, unknown>) => ReactNode)
}

export interface TabBarValue {
  id?: string | number
}
