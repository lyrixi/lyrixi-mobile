import type { ChangeEvent, CSSProperties, ReactNode, SyntheticEvent } from 'react'
import type { AttachNativeFilePayload } from './../types'

export type AttachListItem = Record<string, unknown> & {
  fileUrl?: string
  fileName?: string
  status?: string
}

export interface AttachProps {
  list?: AttachListItem[]
  maxCount?: number
  sourceType?: string | string[]
  disabled?: boolean
  allowChoose?: boolean
  allowClear?: boolean
  async?: boolean
  reUpload?: boolean
  maxSize?: number
  style?: CSSProperties
  className?: string
  uploadPosition?: 'start' | 'end'
  children?: ReactNode
  uploadRender?: (ctx: { uploadingType: string }) => ReactNode
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: AttachListItem, index: number) => ReactNode
  previewPortal?: boolean | HTMLElement | null
  previewServerUrl?: string
  previewServerSourceType?: string | string[]
  onBeforeChoose?: (e: SyntheticEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: SyntheticEvent) => unknown
  onFileChange?: (e: ChangeEvent<HTMLInputElement> | AttachNativeFilePayload) => unknown
  onUpload?: (item: AttachListItem) => unknown
  onChange?: (list: AttachListItem[], meta?: { action?: string }) => void
  onPreview?: (item: AttachListItem, index: number) => unknown
}

export interface AttachRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e: SyntheticEvent) => Promise<unknown>
  choose: (e: SyntheticEvent) => Promise<unknown>
  uploadList: (
    newList?: AttachListItem[] | null,
    meta?: { action?: string }
  ) => Promise<AttachListItem[]>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
}
