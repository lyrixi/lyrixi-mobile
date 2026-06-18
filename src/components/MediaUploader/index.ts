import uploadList from './utils/uploadList'
import _MediaUploader from './MediaUploader'

import type { MediaUploaderComponents } from './types/MediaUploader.modules.types'

const MediaUploader = _MediaUploader as MediaUploaderComponents

MediaUploader.uploadList = uploadList

export default MediaUploader
