import type { InputTextProps } from './Input.Text.types'

export interface InputUrlProps extends InputTextProps {
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
}
