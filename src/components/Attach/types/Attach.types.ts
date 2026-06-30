import type { CSSProperties, ReactNode, SyntheticEvent } from 'react'

import type { ModalProps } from '../../Modal/types'

// 内库使用-start
import type { FileItem } from '../../../utils/Bridge/types'
// 内库使用-end

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
  uploadRender?: (options: { uploadingType: string }) => ReactNode
  uploadingRender?: (options: { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem, index: number) => ReactNode
  // Events
  onBeforeChoose?: (e: SyntheticEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: SyntheticEvent) => unknown
  onFileChange?: (fileItems: FileItem[]) => FileItem[] | Promise<FileItem[] | unknown>
  onUpload?: (item: FileItem) => unknown
  onChange?: (list: FileItem[], options?: { action?: string }) => void
  onPreview?: (item: FileItem, index: number) => unknown
}

export interface AttachRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e: SyntheticEvent) => Promise<unknown>
  choose: (e: SyntheticEvent) => Promise<unknown>
  uploadList: (newList?: FileItem[] | null, options?: { action?: string }) => Promise<FileItem[]>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
}
