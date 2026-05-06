import type { InputTextProps } from './../Text/types'

export interface UrlProps extends InputTextProps {
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
}
