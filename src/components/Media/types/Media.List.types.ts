import type { ReactNode } from 'react'

import type { MediaUploadingProps } from './Media.Uploading.types'

// 内库使用-start
import type { FileItem } from './../../Attach/types'
// 内库使用-end

export interface MediaListMainProps {
  // Value & Display Value
  list: FileItem[]
  ellipsis?: { count?: number }
  // Status
  allowClear?: boolean | ((item: FileItem) => boolean)
  // Elements
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: FileItem) => ReactNode
  // Events
  onChange?: (list: FileItem[], meta: { action: string }) => void
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: (item: FileItem, index: number) => void
}
