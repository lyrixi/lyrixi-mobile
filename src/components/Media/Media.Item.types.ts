import type { MouseEvent, ReactNode } from 'react'

import type { MediaListItem } from './Media.Media.types'
import type { MediaUploadingProps } from './Media.Uploading.types'

export interface MediaItemProps {
  item: MediaListItem
  index: number
  remainCount?: number | null
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: MediaListItem) => ReactNode
  onDelete?: (item: MediaListItem, index: number) => void
  onReUpload?: (item: MediaListItem, index: number) => void
  onPreview?: (item: MediaListItem, index: number) => void
}
