import type { ReactNode } from 'react'

import type { MediaUploadingProps } from './Media.Uploading.types'

// 内库使用-start
import type { FileItem } from './../../../utils/Bridge/types'
// 内库使用-end

export interface MediaItemProps {
  // Value & Display Value
  item: FileItem
  index: number
  remainCount?: number | null
  // Elements
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: FileItem) => ReactNode
  // Events
  onDelete?: (item: FileItem, options: { index: number }) => void
  onReUpload?: (item: FileItem, options: { index: number }) => void
  onPreview?: (item: FileItem, options: { index: number }) => void
}
