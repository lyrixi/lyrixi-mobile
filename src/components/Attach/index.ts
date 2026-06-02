import type { AttachComponents } from './types/Attach.modules.types'
import _Attach from './Attach'
import validateListStatus from './../Media/utils/validateListStatus'
import supportTypes from './utils/supportTypes'
import List from './List'
import Button from './Choose/Button'
import Uploading from './Uploading'

const Attach = _Attach as AttachComponents

Attach.validateListStatus = validateListStatus
Attach.supportTypes = supportTypes
Attach.List = List
Attach.Button = Button
Attach.Uploading = Uploading

export default Attach
