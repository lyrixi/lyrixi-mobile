import type { ChangeEvent, CSSProperties, ReactNode, SyntheticEvent } from 'react'

import type { ModalProps } from '../../Modal/types'
import type { AttachItem } from './Attach.common.types'

export type AttachListItem = Record<string, unknown> & {
  fileUrl?: string
  fileName?: string
  status?: string
}

export interface AttachProps {
  // Value & Display Value
  list?: AttachListItem[]
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
  itemRender?: (item: AttachListItem, index: number) => ReactNode
  // Events
  onBeforeChoose?: (e: SyntheticEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: SyntheticEvent) => unknown
  onFileChange?: (e: ChangeEvent<HTMLInputElement> | AttachItem) => unknown
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
