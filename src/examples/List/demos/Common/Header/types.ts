import type { ComponentProps } from 'react'

import SearchBar from '../../../../../components/ToolBar/Search'
import SearchActive from '../../../../../components/ToolBar/SearchActive'

export type SearchBarProps = ComponentProps<typeof SearchBar>
export type SearchActiveProps = ComponentProps<typeof SearchActive>

export type HeaderProps = {
  queryParams: Record<string, unknown>
  onSearch: (p: Record<string, unknown>) => void
}
