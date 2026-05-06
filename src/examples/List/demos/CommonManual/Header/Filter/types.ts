import type { ComponentProps } from 'react'

import ToolBarFilter from '../../../../../../components/ToolBar/Filter'

export type ToolBarFilterProps = ComponentProps<typeof ToolBarFilter>

export type FilterHeaderProps = {
  queryParams?: Record<string, unknown>
  onSearch?: (p: Record<string, unknown>) => void
}

export type ToolBarFilterOkParams = {
  close: () => void
}
