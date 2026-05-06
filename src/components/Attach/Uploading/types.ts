import type { ReactNode } from 'react'

export interface UploadingProps {
  uploadingType: string
  className?: string
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
}
