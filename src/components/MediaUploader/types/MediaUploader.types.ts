import type { MediaUploaderCommonProps } from './MediaUploader.common.types'

export interface MediaUploaderProps extends MediaUploaderCommonProps {
  platform?: string
  compatible?: boolean | string
  timeout?: number
  chooseExtraParams?: Record<string, unknown>
  onNavigateTo?: (params: Record<string, unknown>) => Promise<boolean | void>
}
