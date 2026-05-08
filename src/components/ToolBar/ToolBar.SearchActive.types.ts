import type { InputSearchProps } from './../Input/types'

export type ToolBarSearchActiveProps = InputSearchProps & {
  onCancel?: () => void
}
