import type { SearchProps } from './../Input/types'

export type ToolBarSearchActiveProps = SearchProps & {
  onCancel?: () => void
}
