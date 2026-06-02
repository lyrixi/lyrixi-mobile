import { useWatch as useRcWatch } from 'rc-field-form'
import _Form from './Form'
import Item from './Item'
import useForm from './useForm'

import type { FormComponents } from './types/Form.modules.types'

const Form = _Form as FormComponents

Form.Item = Item
Form.useForm = useForm
Form.useWatch = useRcWatch

export default Form
