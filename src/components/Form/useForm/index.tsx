import React from 'react'
import { useForm as useRcForm } from 'rc-field-form'
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

function useForm(form?: FormInstance): [WrappedFormInstance] {
  const [rcForm] = useRcForm()

  const wrapForm = React.useMemo<WrappedFormInstance>(
    () =>
      form
        ? (form as WrappedFormInstance)
        : {
            ...rcForm,
            scrollToField: (name: string, options?: ScrollToFieldOptions) => {
              const fieldElement = document.getElementById(`lyrixi-form-item-${name}`)

              if (fieldElement) {
                fieldElement.scrollIntoView({ behavior: 'smooth', block: 'start', ...options })
              }
            }
          },
    [form, rcForm]
  )

  return [wrapForm]
}

export default useForm
