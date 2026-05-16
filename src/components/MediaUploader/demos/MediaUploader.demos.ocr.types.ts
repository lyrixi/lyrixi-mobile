export type MediaUploaderDemoOcrItem = {
  fileUrl?: string
  ocrResult?: unknown
  ocrErrMsg?: string
} & Record<string, unknown>

export type MediaUploaderDemoOcrListItem = {
  fileThumbnail?: string
  fileUrl?: string
  filePath?: string
} & Record<string, unknown>
