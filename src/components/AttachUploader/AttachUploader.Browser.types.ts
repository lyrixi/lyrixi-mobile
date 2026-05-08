import type { AttachUploaderBaseProps } from './AttachUploader.main.types'

export type AttachUploaderBrowserProps = Omit<AttachUploaderBaseProps, 'onFileChange' | 'onUpload'>
