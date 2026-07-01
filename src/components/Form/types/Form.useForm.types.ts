import type { FormInstance } from 'rc-field-form'

export interface ScrollToFieldParams {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
  [key: string]: unknown
}

export type WrappedFormInstance = FormInstance & {
  scrollToField: (name: string, params?: ScrollToFieldParams) => void
}
