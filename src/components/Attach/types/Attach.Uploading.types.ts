import type { ReactNode } from 'react'

export interface AttachUploadingProps {
  // Value & Display Value
  uploadingType: string
  // Style
  className?: string
  // Elements
  uploadingRender?: (options: { uploadingType: string }) => ReactNode
}
