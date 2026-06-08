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
import type { FileItem } from './../../Attach/types'
// 内库使用-end

export interface MediaChooseCallbacks {
  onBeforeChoose?: (e: React.MouseEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: React.MouseEvent) => void | Promise<unknown>
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
}

export interface FileImageCompressOptions {
  maxWidth?: number
  quality?: number
}

export interface MediaProps extends MediaChooseCallbacks {
  list?: FileItem[]
  maxCount?: number
  mediaType?: string[]
  ellipsis?: { count?: number }
  sourceType?: string[]
  sizeType?: string[]
  fileImageCompress?: FileImageCompressOptions
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
  uploadRender?: (ctx: { uploadType: string }) => ReactNode
  uploadingRender?: (ctx: FileItem & { uploadingType: string }) => ReactNode
  itemRender?: (item: FileItem) => ReactNode
  previewPortal?: HTMLElement | null
  previewCancelPosition?: 'left' | 'right'
  onUpload?: (item: FileItem) => void | Promise<unknown>
  onChange?: (list: FileItem[], meta: { action: string }) => void | Promise<unknown>
  onPreview?: (
    item: FileItem,
    index: number
  ) =>
    | void
    | boolean
    | 'nativeMedia'
    | 'nativeFile'
    | 'browser'
    | Promise<void | boolean | 'nativeMedia' | 'nativeFile' | 'browser'>
}

export type MediaListChangeHandler = (list: FileItem[], meta: { action: string }) => void

export type MediaFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
export type MediaOnBeforeChooseHandler = (e: MouseEvent) => void | boolean | Promise<void | boolean>
export type MediaOnChooseHandler = (e?: MouseEvent) => void | Promise<unknown>

export interface MediaRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e?: SyntheticEvent) => Promise<unknown>
  choose: (e?: SyntheticEvent) => Promise<unknown>
  uploadList: (newList?: FileItem[], opts?: { action?: string }) => Promise<FileItem[] | undefined>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
  setPreviewVisible: Dispatch<SetStateAction<number | null>>
}
