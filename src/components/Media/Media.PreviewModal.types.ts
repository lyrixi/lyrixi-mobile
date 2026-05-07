import type { CSSProperties } from 'react'

import type { ModalProps } from '../Modal/types'
import type { FileImageCompressOptions, MediaComponentProps, MediaListItem } from './Media.Media.types'

export interface MediaPreviewModalProps {
  list?: MediaListItem[]
  /** 当前项下标（部分调用方使用 `current`） */
  index?: number
  current?: number
  mediaType?: string | string[]
  maxCount?: number
  sourceType?: string[]
  sizeType?: string[]
  fileImageCompress?: FileImageCompressOptions
  open?: boolean
  allowChoose?: boolean
  allowClear?: boolean | ((item: MediaListItem) => boolean)
  mainStyle?: CSSProperties
  mainClassName?: string
  safeArea?: boolean
  navBarStyle?: CSSProperties
  navBarClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  cancelPosition?: 'left' | 'right'
  onBeforeChoose?: MediaComponentProps['onBeforeChoose']
  onChoose?: MediaComponentProps['onChoose']
  onFileChange?: MediaComponentProps['onFileChange']
  onUpload?: MediaComponentProps['onUpload']
  onChange?: MediaComponentProps['onChange']
  onClose?: () => void
}
