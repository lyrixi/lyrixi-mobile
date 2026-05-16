import type { InputTextProps, ToolBarSearchActiveProps } from 'lyrixi-mobile'

export type SearchBarProps = InputTextProps
export type SearchActiveProps = ToolBarSearchActiveProps

export type HeaderProps = {
  queryParams: Record<string, unknown>
  onSearch: (p: Record<string, unknown>) => void
}
