import type { CSSProperties, ReactNode } from 'react'

export interface AttachButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface AttachButtonProps {
  // Status
  disabled?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  uploadingRender?: (options: { uploadingType: string }) => ReactNode
}
