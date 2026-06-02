import type { ReactNode } from 'react'

import type { MediaItem } from './Media.types'
import type { MediaUploadingProps } from './Media.Uploading.types'

export interface MediaItemProps {
  // Value & Display Value
  item: MediaItem
  index: number
  remainCount?: number | null
  // Elements
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: MediaItem) => ReactNode
  // Events
  onDelete?: (item: MediaItem, index: number) => void
  onReUpload?: (item: MediaItem, index: number) => void
  onPreview?: (item: MediaItem, index: number) => void
}
