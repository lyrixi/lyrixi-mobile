import { useWatch as useRcWatch } from 'rc-field-form'
import Form from './Form'
import Item from './Item'
import useForm from './useForm'

import type { FormComponents } from './Form.Components.types'

;(Form as FormComponents).Item = Item
;(Form as FormComponents).useForm = useForm
;(Form as FormComponents).useWatch = useRcWatch

export default Form as FormComponents
