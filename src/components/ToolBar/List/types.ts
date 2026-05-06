import type { ReactNode } from 'react'

import type { ToolBarDropdownProps } from './../Dropdown/types'
import type { ListProps } from './../../List/List/types'

export interface ListBarProps {
  value?: ListProps['value']
  list: NonNullable<ListProps['list']>
  onChange?: ListProps['onChange']
}

export interface ToolBarListProps extends Omit<ToolBarDropdownProps, 'children' | 'modalRender'> {
  value?: ListProps['value']
  placeholder?: string
  list: NonNullable<ListProps['list']>
  children?: ReactNode
  onChange?: (value: unknown) => void
}
