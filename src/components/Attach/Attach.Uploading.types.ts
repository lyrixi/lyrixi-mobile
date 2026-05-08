import type { ReactNode } from 'react'

export interface AttachUploadingProps {
  uploadingType: string
  className?: string
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
}
