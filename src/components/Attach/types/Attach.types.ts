import type { ChangeEvent, CSSProperties, ReactNode, SyntheticEvent } from 'react'

import type { ModalProps } from '../../Modal/types'
import type { FileItem } from './Attach.common.types'

export interface AttachProps {
  // Value & Display Value
  list?: FileItem[]
  maxCount?: number
  sourceType?: string | string[]
  allowChoose?: boolean
  async?: boolean
  reUpload?: boolean
  maxSize?: number
  uploadPosition?: 'start' | 'end'
  previewPortal?: ModalProps['portal']
  previewServerUrl?: string
  previewServerSourceType?: string | string[]
  // Status
  disabled?: boolean
  allowClear?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  uploadRender?: (ctx: { uploadingType: string }) => ReactNode
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  // Events
  onBeforeChoose?: (e: SyntheticEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: SyntheticEvent) => unknown
  onFileChange?: (e: ChangeEvent<HTMLInputElement> | FileItem) => unknown
  onUpload?: (item: FileItem) => unknown
  onChange?: (list: FileItem[], meta?: { action?: string }) => void
  onPreview?: (item: FileItem, index: number) => unknown
}

export interface AttachRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e: SyntheticEvent) => Promise<unknown>
  choose: (e: SyntheticEvent) => Promise<unknown>
  uploadList: (
    newList?: FileItem[] | null,
    meta?: { action?: string }
  ) => Promise<FileItem[]>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
}
