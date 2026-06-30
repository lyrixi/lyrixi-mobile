import type { ReactNode } from 'react'

// 内库使用-start
import type { FileItem } from '../../../utils/Bridge/types'
// 内库使用-end

export interface AttachListProps {
  // Value & Display Value
  list?: FileItem[]
  // Status
  allowClear?: boolean | ((item: unknown) => boolean)
  // Elements
  uploadingRender?: (options: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  // Events
  onChange?: (list: FileItem[], meta: { action: string }) => void
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: (item: FileItem, index: number) => unknown
}
