import './Input.less'
import AutoSize from './AutoSize'
import Number from './Number'
import NumberBox from './NumberBox'
import NumberKeyboard from './NumberKeyboard'
import OTP from './OTP'
import Password from './Password'
import PasswordStrength from './PasswordStrength'
import Range from './Range'
import Rate from './Rate'
import Tel from './Tel'
import Text from './Text'
import Node from './Node'
import Search from './Search'
import Select from './Select'
import Textarea from './Textarea'

import Url from './Url'
import IconClear from './Icon/Clear'
import IconRightArrow from './Icon/RightArrow'
import IconLeftArrow from './Icon/LeftArrow'

// eslint-disable-next-line
export default {
  AutoSize: AutoSize,
  Number: Number,
  NumberBox: NumberBox,
  NumberKeyboard: NumberKeyboard,
  OTP: OTP,
  Password: Password,
  PasswordStrength: PasswordStrength,
  Range: Range,
  Rate: Rate,
  Tel: Tel,
  Text: Text,
  Node: Node,
  Search: Search,
  // (内部组件, 不对外开放)仅渲染Input, 用于列表相关选择控件的基础组件, 不可单独使用
  Select: Select,
  Textarea: Textarea,
  Url: Url,
  IconClear: IconClear,
  IconRightArrow: IconRightArrow,
  IconLeftArrow: IconLeftArrow
}
