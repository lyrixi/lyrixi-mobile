import type { MediaItem } from './Media.types'

export interface MediaFileChooseChangePayload {
  fileName: string
  fileSize?: number
  fileType?: string
  fileUrl?: string
  filePath?: File
  status: string
}

export interface MediaFileChooseOptions {
  file: HTMLInputElement
  async: boolean
  sizeType?: string[]
  maxWidth?: number
  quality?: number
  maxCount?: number
  list?: MediaItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: MediaItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<MediaItem[] | undefined>
  onFileChange?: (
    payload: MediaFileChooseChangePayload
  ) => Promise<MediaItem[] | void> | MediaItem[] | void
  onChange?: (list: MediaItem[], meta: { action: string }) => void
}
