import type { ListProps } from './../../List/List/types'
import type { ToolBarDropdownProps } from './../Dropdown/types'

export interface ToolBarListProps extends ToolBarDropdownProps {
  value?: { name?: string; [key: string]: unknown } | null
  placeholder?: string
  list: NonNullable<ListProps['list']>
  onChange?: (value: unknown) => void
}
