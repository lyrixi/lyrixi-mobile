import type { ReactNode } from 'react'

import type { MediaListItem } from './Media.Media.types'

export interface MediaUploadingProps {
  uploadingType: string
  item?: MediaListItem
  className?: string
  uploadingRender?: (ctx: MediaListItem & { uploadingType: string }) => ReactNode
}
