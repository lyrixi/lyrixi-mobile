import type { ReactNode } from 'react'

import type { AttachItem } from '../types/Attach.common.types'
import type { AttachListProps } from '../types/Attach.List.types'

export interface AttachItemProps {
  // Value & Display Value
  item: AttachItem
  index: number
  // Elements
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachItem, index: number) => ReactNode
  // Events
  onDelete: ((item: AttachItem, index: number) => void) | null
  onReUpload?: (item: AttachItem, index: number) => void
  onPreview?: AttachListProps['onPreview']
}
