export type * from './types'

import validateListStatus from './utils/validateListStatus'
import isAllowClear from './utils/isAllowClear'
import MediaBase from './Media'
import Mark from './Mark'
import PreviewModal from './PreviewModal'
import PreviewMain from './PreviewMain'
import List from './List'

const Media = Object.assign(MediaBase, {
  validateListStatus,
  isAllowClear,
  Mark,
  PreviewModal,
  PreviewMain,
  List
}) as typeof MediaBase & {
  validateListStatus: typeof validateListStatus
  isAllowClear: typeof isAllowClear
  Mark: typeof Mark
  PreviewModal: typeof PreviewModal
  PreviewMain: typeof PreviewMain
  List: typeof List
}

export default Media
