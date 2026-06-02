import validateListStatus from './utils/validateListStatus'
import isAllowClear from './utils/isAllowClear'
import _Media from './Media'
import Mark from './Mark'
import PreviewModal from './PreviewModal'
import PreviewMain from './PreviewMain'
import List from './List'

import type { MediaComponents } from './types/Media.modules.types'

const Media = _Media as MediaComponents

Media.validateListStatus = validateListStatus
Media.isAllowClear = isAllowClear
Media.Mark = Mark
Media.PreviewModal = PreviewModal
Media.PreviewMain = PreviewMain
Media.List = List

export default Media
