import type { ReactNode } from 'react'

import type { FileItem } from './Attach.common.types'

export interface AttachListProps {
  // Value & Display Value
  list?: FileItem[]
  // Status
  allowClear?: boolean | ((item: unknown) => boolean)
  // Elements
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  // Events
  onChange?: (list: FileItem[], meta: { action: string }) => void
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: (item: FileItem, index: number) => unknown
}
