import type { ChangeEvent, MouseEvent, ReactNode } from 'react'

import type { MediaUploadingProps } from './Media.Uploading.types'

export interface MediaChooseProps {
  mediaType?: string[]
  sourceType?: string[]
  className?: string
  uploadRender?: (ctx: { uploadType: string }) => ReactNode
  uploadingRender?: MediaUploadingProps['uploadingRender']
  onBeforeChoose?: (e: MouseEvent) => void | boolean | Promise<void | boolean>
  onChoose?: (e?: MouseEvent) => void | Promise<unknown>
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
}
