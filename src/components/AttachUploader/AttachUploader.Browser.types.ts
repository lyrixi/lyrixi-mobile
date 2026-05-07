import type { AttachUploaderBaseProps } from './AttachUploader.main.types'

export type BrowserProps = Omit<AttachUploaderBaseProps, 'onFileChange' | 'onUpload'>
