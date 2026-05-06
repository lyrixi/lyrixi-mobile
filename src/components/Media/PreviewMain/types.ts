import type { CSSProperties } from 'react'
import type { SwiperRef } from 'swiper/react'

import type { FileImageCompressOptions, MediaComponentProps, MediaListItem } from './../types'

export interface PreviewMainProps {
  list?: MediaListItem[]
  index?: number
  mediaType?: string | string[]
  sourceType?: string[]
  sizeType?: string[]
  maxCount?: number
  fileImageCompress?: FileImageCompressOptions
  open?: boolean
  closable?: boolean
  allowChoose?: boolean
  allowClear?: boolean | ((item: MediaListItem) => boolean)
  async?: boolean
  reUpload?: boolean
  className?: string
  style?: CSSProperties
  safeArea?: boolean
  onBeforeChoose?: MediaComponentProps['onBeforeChoose']
  onChoose?: MediaComponentProps['onChoose']
  onFileChange?: MediaComponentProps['onFileChange']
  onUpload?: MediaComponentProps['onUpload']
  onChange?: MediaComponentProps['onChange']
  onClose?: () => void
}

export interface PreviewMainRef {
  mainElement: SwiperRef | null
  getMainElement: () => SwiperRef | null
}
