import React, { forwardRef, type ReactNode } from 'react'
import Form from 'rc-field-form'
import type { FormInstance, FormProps as RcFormProps } from 'rc-field-form'
import type { Store, ValidateMessages } from 'rc-field-form/lib/interface'
import Items from './../components/Items'
import type { FormItemsRef } from './../components/Items/Form'
import type { EllipsisConfig } from './../components/ItemsContext'

export interface FormComponentProps {
  // Global properties
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  // Own properties
  virtual?: boolean
  style?: React.CSSProperties
  className?: string
  children?: ReactNode
  // Form properties
  form?: FormInstance
  name?: string
  validateMessages?: ValidateMessages
  initialValues?: Store
  onFieldsChange?: RcFormProps['onFieldsChange']
  onValuesChange?: RcFormProps['onValuesChange']
}

// layout: horizontal | vertical | inline
const FormComponent = forwardRef<FormItemsRef, FormComponentProps>(
  (
    {
      // Global properties
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,
      // Own properties
      virtual,
      style,
      className,
      children,
      // Form properties
      form,
      name,
      validateMessages,
      initialValues,
      onFieldsChange,
      onValuesChange
    },
    ref
  ) => {
    return (
      <Form
        className="lyrixi-form"
        form={form}
        name={name}
        validateMessages={validateMessages}
        initialValues={initialValues}
        onFieldsChange={onFieldsChange}
        onValuesChange={onValuesChange}
      >
        <Items
          ref={ref}
          virtual={virtual}
          layout={layout}
          labelSpan={labelSpan}
          labelEllipsis={labelEllipsis}
          mainSpan={mainSpan}
          mainEllipsis={mainEllipsis}
          style={style}
          className={className}
        >
          {children}
        </Items>
      </Form>
    )
  }
)

export default FormComponent
