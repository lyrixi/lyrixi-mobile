import uploadList from '../utils/uploadList'
import _MediaUploader from '../MediaUploader'

export type MediaUploaderComponents = typeof _MediaUploader & {
  uploadList: typeof uploadList
}
