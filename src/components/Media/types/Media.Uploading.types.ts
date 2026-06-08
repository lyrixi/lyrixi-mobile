import type { ReactNode } from 'react'

// 内库使用-start
import type { FileItem } from './../../Attach/types'
// 内库使用-end

export interface MediaUploadingProps {
  // Value & Display Value
  uploadingType: string
  item?: FileItem
  // Style
  className?: string
  // Elements
  uploadingRender?: (ctx: FileItem & { uploadingType: string }) => ReactNode
}
