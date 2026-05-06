import type { FormInstance } from 'rc-field-form'

export interface ScrollToFieldOptions {
  behavior?: ScrollBehavior
  block?: ScrollLogicalPosition
  inline?: ScrollLogicalPosition
  [key: string]: unknown
}

export type WrappedFormInstance = FormInstance & {
  scrollToField: (name: string, options?: ScrollToFieldOptions) => void
}
