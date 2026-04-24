import type {
  CSSProperties,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent
} from 'react'
import type { MediaItem } from '../MediaUploader/types'

/** 与 MediaUploader 的 MediaItem 对齐，并补充列表/预览用字段 */
export type MediaListItem = MediaItem & {
  className?: string
  reloadKey?: unknown
}

export interface MediaChooseCallbacks {
  onBeforeChoose?: (e: React.MouseEvent) => boolean | void | Promise<boolean | void>
  onChoose?: (e?: React.MouseEvent) => void | Promise<unknown>
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
}

export interface FileImageCompressOptions {
  maxWidth?: number
  quality?: number
}

export interface MediaComponentProps extends MediaChooseCallbacks {
  list?: MediaListItem[]
  maxCount?: number
  mediaType?: string[]
  ellipsis?: { count?: number }
  sourceType?: string[]
  sizeType?: string[]
  fileImageCompress?: FileImageCompressOptions
  allowChoose?: boolean
  allowClear?: boolean | ((item: MediaListItem) => boolean)
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
  uploadingRender?: (ctx: MediaListItem & { uploadingType: string }) => ReactNode
  itemRender?: (item: MediaListItem) => ReactNode
  previewPortal?: HTMLElement | null
  previewCancelPosition?: 'left' | 'right'
  onUpload?: (item: MediaListItem) => void | Promise<unknown>
  onChange?: (
    list: MediaListItem[],
    meta: { action: string }
  ) => void | Promise<unknown>
  onPreview?: (
    item: MediaListItem,
    index: number
  ) =>
    | void
    | boolean
    | 'nativeMedia'
    | 'nativeFile'
    | 'browser'
    | Promise<void | boolean | 'nativeMedia' | 'nativeFile' | 'browser'>
}

export type MediaListChangeHandler = (list: MediaListItem[], meta: { action: string }) => void

export type MediaFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void | Promise<unknown>
export type MediaOnBeforeChooseHandler = (e: MouseEvent) => void | boolean | Promise<void | boolean>
export type MediaOnChooseHandler = (e?: MouseEvent) => void | Promise<unknown>

export interface MediaImperativeRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e?: SyntheticEvent) => Promise<unknown>
  choose: (e?: SyntheticEvent) => Promise<unknown>
  uploadList: (
    newList?: MediaListItem[],
    opts?: { action?: string }
  ) => Promise<MediaListItem[] | undefined>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
  setPreviewVisible: Dispatch<SetStateAction<number | null>>
}
