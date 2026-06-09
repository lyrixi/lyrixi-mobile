import type { MediaChooseProps } from './Media.Choose.types'

export interface MediaPreviewChooseProps {
  // Value & Display Value
  mediaType?: string | string[]
  sourceType: string[]
  // Events
  onBeforeChoose?: MediaChooseProps['onBeforeChoose']
  onChoose?: MediaChooseProps['onChoose']
  onFileChange?: MediaChooseProps['onFileChange']
}
