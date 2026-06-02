import type { InputTextProps, InputTextRef } from './Input.Text.types'

/** URL 输入：在 `Input.Text` 上增加 `onPreview`。 */
export interface InputUrlProps extends InputTextProps {
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
}

export interface InputUrlRef extends InputTextRef {}
