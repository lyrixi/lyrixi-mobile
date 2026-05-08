import type { InputTextProps } from './Input.Text.types'

export interface SearchProps extends InputTextProps {
  onSearch?: (value: string) => void
}
