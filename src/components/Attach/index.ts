import Attach from './Attach'
import validateListStatus from './../Media/utils/validateListStatus'
import supportTypes from './utils/supportTypes'
import List from './List'
import Button from './Choose/Button'
import Uploading from './Uploading'

export type { AttachListItem, AttachRef, AttachProps } from './Attach/types'

const AttachWithStatics = Attach as typeof Attach & {
  validateListStatus: typeof validateListStatus
  supportTypes: typeof supportTypes
  List: typeof List
  Button: typeof Button
  Uploading: typeof Uploading
}

AttachWithStatics.validateListStatus = validateListStatus
AttachWithStatics.supportTypes = supportTypes
AttachWithStatics.List = List
AttachWithStatics.Button = Button
AttachWithStatics.Uploading = Uploading

export default AttachWithStatics
