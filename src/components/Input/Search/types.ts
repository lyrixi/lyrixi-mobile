import type { InputTextProps } from './../Text/types'

export interface SearchProps extends InputTextProps {
  onSearch?: (value: string) => void
}
