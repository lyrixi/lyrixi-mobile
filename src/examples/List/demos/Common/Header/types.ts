import type { InputSearchProps, ToolBarSearchActiveProps } from 'lyrixi-mobile'

export type SearchBarProps = InputSearchProps
export type SearchActiveProps = ToolBarSearchActiveProps

export type HeaderProps = {
  queryParams: Record<string, unknown>
  onSearch: (p: Record<string, unknown>) => void
}
