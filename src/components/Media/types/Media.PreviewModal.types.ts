import type { CSSProperties } from 'react'

import type { ModalProps } from '../../Modal/types'
import type { FileImageCompressOptions, MediaProps } from './Media.types'

// 内库使用-start
import type { FileItem } from './../../Attach/types'
// 内库使用-end

export interface MediaPreviewModalProps {
  // Value & Display Value
  list?: FileItem[]
  index?: number
  current?: number
  mediaType?: string | string[]
  maxCount?: number
  sourceType?: string[]
  sizeType?: string[]
  fileImageCompress?: FileImageCompressOptions
  // Status
  open?: boolean
  allowChoose?: boolean
  allowClear?: boolean | ((item: MediaItem) => boolean)
  // Style
  mainStyle?: CSSProperties
  mainClassName?: string
  safeArea?: boolean
  navBarStyle?: CSSProperties
  navBarClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  // Elements
  portal?: ModalProps['portal']
  cancelPosition?: 'left' | 'right'
  // Events
  onBeforeChoose?: MediaProps['onBeforeChoose']
  onChoose?: MediaProps['onChoose']
  onFileChange?: MediaProps['onFileChange']
  onUpload?: MediaProps['onUpload']
  onChange?: MediaProps['onChange']
  onClose?: () => void
}
