import type { ReactNode } from 'react'

import type { AttachFileItem } from '../types/Attach.common.types'
import type { AttachListProps } from '../types/Attach.List.types'

export interface AttachItemProps {
  // Value & Display Value
  item: AttachFileItem
  index: number
  // Elements
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  // Events
  onDelete: ((item: AttachFileItem, index: number) => void) | null
  onReUpload?: (item: AttachFileItem, index: number) => void
  onPreview?: AttachListProps['onPreview']
}
