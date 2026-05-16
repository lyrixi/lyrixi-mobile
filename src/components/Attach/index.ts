import type { AttachComponents } from './Attach.Components.types'
import Attach from './Attach'
import validateListStatus from './../Media/utils/validateListStatus'
import supportTypes from './utils/supportTypes'
import List from './List'
import Button from './Choose/Button'
import Uploading from './Uploading'

const AttachExport = Attach as AttachComponents

AttachExport.validateListStatus = validateListStatus
AttachExport.supportTypes = supportTypes
AttachExport.List = List
AttachExport.Button = Button
AttachExport.Uploading = Uploading

export default AttachExport
