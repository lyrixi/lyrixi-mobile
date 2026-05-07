import type { MediaListItem } from './Media.Media.types'

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
  list?: MediaListItem[]
  uploadPosition: 'start' | 'end' | string
  uploadList: (
    newList: MediaListItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<MediaListItem[] | undefined>
  onFileChange?: (
    payload: MediaFileChooseChangePayload
  ) => Promise<MediaListItem[] | void> | MediaListItem[] | void
  onChange?: (list: MediaListItem[], meta: { action: string }) => void
}
