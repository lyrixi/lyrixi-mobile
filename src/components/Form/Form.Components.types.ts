import { useWatch as useRcWatch } from 'rc-field-form'

import Form from './Form'
import Item from './Item'
import useForm from './useForm'

export type FormComponents = typeof Form & {
  Item: typeof Item
  useForm: typeof useForm
  useWatch: typeof useRcWatch
}
