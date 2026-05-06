import type { AttachUploaderBaseProps } from './../types'

export type BrowserProps = Omit<AttachUploaderBaseProps, 'onFileChange' | 'onUpload'>
