import type { ReactNode } from 'react'

import type { MediaItem } from './Media.types'
import type { MediaUploadingProps } from './Media.Uploading.types'

export interface MediaListMainProps {
  // Value & Display Value
  list: MediaItem[]
  ellipsis?: { count?: number }
  // Status
  allowClear?: boolean | ((item: MediaItem) => boolean)
  // Elements
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: MediaItem) => ReactNode
  // Events
  onChange?: (list: MediaItem[], meta: { action: string }) => void
  onReUpload?: (item: MediaItem, index: number) => void
  onPreview?: (item: MediaItem, index: number) => void
}
