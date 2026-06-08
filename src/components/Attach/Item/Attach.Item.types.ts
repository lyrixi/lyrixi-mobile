import type { ReactNode } from 'react'

import type { FileItem } from '../types/Attach.common.types'
import type { AttachListProps } from '../types/Attach.List.types'

export interface FileItemProps {
  // Value & Display Value
  item: FileItem
  index: number
  // Elements
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  // Events
  onDelete: ((item: FileItem, index: number) => void) | null
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: AttachListProps['onPreview']
}
