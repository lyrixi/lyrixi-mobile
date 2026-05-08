import type { InputTextProps } from './Input.Text.types'

export interface InputSearchProps extends InputTextProps {
  onSearch?: (value: string) => void
}
