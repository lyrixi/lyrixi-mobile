import type { ReactNode } from 'react'

import type { AttachListProps } from '../types/Attach.List.types'

// 内库使用-start
import type { FileItem } from '../../../utils/Bridge/types'
// 内库使用-end

export interface AttachItemProps {
  // Value & Display Value
  item: FileItem
  index: number
  // Elements
  uploadingRender?: (options: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  // Events
  onDelete: ((item: FileItem, index: number) => void) | null
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: AttachListProps['onPreview']
}
