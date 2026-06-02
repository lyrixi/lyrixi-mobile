import type { InputTextProps, InputTextRef } from './Input.Text.types'

/** 搜索框：在 `Input.Text` 上增加 `onSearch`。 */
export interface InputSearchProps extends InputTextProps {
  onSearch?: (value: string) => void
}

export interface InputSearchRef extends InputTextRef {}
