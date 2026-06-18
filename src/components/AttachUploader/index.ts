import uploadList from './../MediaUploader/utils/uploadList'
import _AttachUploader from './AttachUploader'

import type { AttachUploaderComponents } from './types/AttachUploader.modules.types'

const AttachUploader = _AttachUploader as AttachUploaderComponents

AttachUploader.uploadList = uploadList

export default AttachUploader
