import type { ChangeEvent, CSSProperties, MouseEvent, ReactNode } from 'react'

export interface UploadButtonRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface UploadButtonProps {
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  style?: CSSProperties
  className?: string
  disabled?: boolean
}

export interface AttachChooseProps {
  sourceType: string[]
  disabled?: boolean
  className?: string
  uploadRender?: (ctx: { uploadingType: string }) => ReactNode
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  onBeforeChoose?: (e: MouseEvent<HTMLDivElement>) => boolean | void | Promise<boolean | void>
  onChoose?: (e: MouseEvent<HTMLDivElement>) => void | Promise<unknown>
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
