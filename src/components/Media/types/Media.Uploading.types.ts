import type { ReactNode } from 'react'

import type { MediaItem } from './Media.types'

export interface MediaUploadingProps {
  // Value & Display Value
  uploadingType: string
  item?: MediaItem
  // Style
  className?: string
  // Elements
  uploadingRender?: (ctx: MediaItem & { uploadingType: string }) => ReactNode
}
