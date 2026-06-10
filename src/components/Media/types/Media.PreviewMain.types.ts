import type { CSSProperties } from 'react'
import type { SwiperRef } from 'swiper/react'

import type { FileImageCompressOptions, MediaProps } from './Media.types'

// 内库使用-start
import type { FileItem } from './../../../utils/Bridge/types'
// 内库使用-end

export interface MediaPreviewMainProps {
  // Value & Display Value
  list?: FileItem[]
  index?: number
  mediaType?: string | string[]
  sourceType?: string[]
  sizeType?: string[]
  maxCount?: number
  fileImageCompress?: FileImageCompressOptions
  // Status
  open?: boolean
  closable?: boolean
  allowChoose?: boolean
  allowClear?: boolean | ((item: FileItem) => boolean)
  async?: boolean
  reUpload?: boolean
  // Style
  className?: string
  style?: CSSProperties
  safeArea?: boolean
  // Events
  onBeforeChoose?: MediaProps['onBeforeChoose']
  onChoose?: MediaProps['onChoose']
  onFileChange?: MediaProps['onFileChange']
  onUpload?: MediaProps['onUpload']
  onChange?: MediaProps['onChange']
  onClose?: () => void
}

export interface MediaPreviewMainRef {
  mainElement: SwiperRef | null
  getMainElement: () => SwiperRef | null
}
