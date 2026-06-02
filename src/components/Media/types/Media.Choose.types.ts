import type { ChangeEvent, MouseEvent, ReactNode } from 'react'

import type { MediaUploadingProps } from './Media.Uploading.types'

export interface MediaChooseProps {
  // Value & Display Value
  mediaType?: string[]
  sourceType?: string[]
  // Style
  className?: string
  // Elements
  uploadRender?: (ctx: { uploadType: string }) => ReactNode
  uploadingRender?: MediaUploadingProps['uploadingRender']
  // Events
  onBeforeChoose?: (e: MouseEvent) => void | boolean | Promise<void | boolean>
  onChoose?: (e?: MouseEvent) => void | Promise<unknown>
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
}
