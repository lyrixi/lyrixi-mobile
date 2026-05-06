import React from 'react'
import { useForm as useRcForm } from 'rc-field-form'
import type { FormInstance } from 'rc-field-form'

import type { ScrollToFieldOptions, WrappedFormInstance } from './types'

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

export type { ScrollToFieldOptions, WrappedFormInstance } from './types'

