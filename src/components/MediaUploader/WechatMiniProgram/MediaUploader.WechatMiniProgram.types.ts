import type { MediaUploaderCommonProps } from '../types/MediaUploader.common.types'

export interface MediaUploaderWechatMiniProgramProps extends MediaUploaderCommonProps {
  chooseExtraParams?: Record<string, unknown>
  onNavigateTo?: (params: Record<string, unknown>) => Promise<boolean | void>
}
