import type { InputTextProps } from './Input.Text.types'

export interface UrlProps extends InputTextProps {
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
}
