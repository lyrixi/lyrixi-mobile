import type {
  CSSProperties,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent
} from 'react'

// 内库使用-start
import type { AttachProps } from './../../Attach/types'
import type { FileItem } from './../../../utils/Bridge/types'
// 内库使用-end

export interface FileImageCompressParams {
  maxWidth?: number
  quality?: number
}

export interface MediaProps {
  onBeforeChoose?: (e: React.MouseEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: React.MouseEvent) => void | Promise<unknown>
  onFileChange?: AttachProps['onFileChange']
  list?: FileItem[]
  maxCount?: number
  mediaType?: string[]
  ellipsis?: { count?: number }
  sourceType?: string[]
  sizeType?: string[]
  fileImageCompress?: FileImageCompressParams
  allowChoose?: boolean
  allowClear?: boolean | ((item: FileItem) => boolean)
  async?: boolean
  reUpload?: boolean
  previewAllowChoose?: boolean
  previewAllowClear?: boolean
  style?: CSSProperties
  className?: string
  uploadPosition?: 'start' | 'end'
  previewSafeArea?: boolean
  previewNavBarStyle?: CSSProperties
  previewNavBarClassName?: string
  previewModalStyle?: CSSProperties
  previewModalClassName?: string
  previewMaskStyle?: CSSProperties
  previewMaskClassName?: string
  uploadRender?: (options: { uploadType: string }) => ReactNode
  uploadingRender?: (options: FileItem & { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem) => ReactNode
  previewPortal?: HTMLElement | null
  previewCancelPosition?: 'left' | 'right'
  onUpload?: (item: FileItem) => void | Promise<unknown>
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
  onPreview?: (
    item: FileItem,
    options: { index: number }
  ) =>
    | void
    | boolean
    | 'nativeMedia'
    | 'nativeFile'
    | 'browser'
    | Promise<void | boolean | 'nativeMedia' | 'nativeFile' | 'browser'>
}

export type MediaListChangeHandler = (list: FileItem[], options: { action: string }) => void

export type MediaFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
export type MediaOnBeforeChooseHandler = (e: MouseEvent) => void | boolean | Promise<void | boolean>
export type MediaOnChooseHandler = (e?: MouseEvent) => void | Promise<unknown>

export interface MediaRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e?: SyntheticEvent) => Promise<unknown>
  choose: (e?: SyntheticEvent) => Promise<unknown>
  uploadList: (list?: FileItem[], options?: { action?: string }) => Promise<FileItem[] | undefined>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
  setPreviewVisible: Dispatch<SetStateAction<number | null>>
}
