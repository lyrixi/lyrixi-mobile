import type { ReactNode } from 'react'

import type { MediaListItem } from './../types'
import type { MediaUploadingProps } from './../Uploading/types'

export interface MediaListComponentProps {
  list: MediaListItem[]
  ellipsis?: { count?: number }
  allowClear?: boolean | ((item: MediaListItem) => boolean)
  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: MediaListItem) => ReactNode
  onChange?: (list: MediaListItem[], meta: { action: string }) => void
  onReUpload?: (item: MediaListItem, index: number) => void
  onPreview?: (item: MediaListItem, index: number) => void
}
