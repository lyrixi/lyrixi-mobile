import type { AttachUploaderProps } from './AttachUploader.main.types'

export interface AttachUploaderBrowserProps extends Omit<AttachUploaderProps, 'onFileChange' | 'onUpload'> {}
