import type { ReactNode } from 'react'

import type { AttachItem } from './Attach.common.types'

export interface AttachListProps {
  // Value & Display Value
  list?: AttachItem[]
  // Status
  allowClear?: boolean | ((item: unknown) => boolean)
  // Elements
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachItem, index: number) => ReactNode
  // Events
  onChange?: (list: AttachItem[], meta: { action: string }) => void
  onReUpload?: (item: AttachItem, index: number) => void
  onPreview?: (item: AttachItem, index: number) => unknown
}
