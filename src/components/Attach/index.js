import './Attach.less'
import Attach from './Attach'

import validateListStatus from './../Media/utils/validateListStatus'
import supportTypes from './utils/supportTypes'
import List from './List'
import Button from './Choose/Button'
import Uploading from './Uploading'

Attach.validateListStatus = validateListStatus
Attach.supportTypes = supportTypes
Attach.List = List
Attach.Button = Button
Attach.Uploading = Uploading

export default Attach
