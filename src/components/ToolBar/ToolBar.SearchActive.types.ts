import type { SearchProps } from './../Input/Search/types'

export type ToolBarSearchActiveProps = SearchProps & {
  onCancel?: () => void
}
