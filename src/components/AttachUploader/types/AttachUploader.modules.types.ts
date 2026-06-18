import uploadList from '../../MediaUploader/utils/uploadList'
import _AttachUploader from '../AttachUploader'

export type AttachUploaderComponents = typeof _AttachUploader & {
  uploadList: typeof uploadList
}