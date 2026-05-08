import { useWatch as useRcWatch } from 'rc-field-form'
import Form from './Form'
import Item from './Item'
import useForm from './useForm'

type FormWithExtensions = typeof Form & {
  Item: typeof Item
  useForm: typeof useForm
  useWatch: typeof useRcWatch
}

;(Form as FormWithExtensions).Item = Item
;(Form as FormWithExtensions).useForm = useForm
;(Form as FormWithExtensions).useWatch = useRcWatch

export type { FormProps, FormItemProps } from './types'
export default Form as FormWithExtensions
