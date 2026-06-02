import type { ReactNode } from 'react'

import type { AttachFileItem } from './Attach.common.types'

export interface AttachListProps {
  // Value & Display Value
  list?: AttachFileItem[]
  // Status
  allowClear?: boolean | ((item: unknown) => boolean)
  // Elements
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  // Events
  onChange?: (list: AttachFileItem[], meta: { action: string }) => void
  onReUpload?: (item: AttachFileItem, index: number) => void
  onPreview?: (item: AttachFileItem, index: number) => unknown
}
