import React, { forwardRef } from 'react'
import Form from 'rc-field-form'

import type { FormProps, FormItemsRef } from '../types'

import Items from './../components/Items'

// layout: horizontal | vertical | inline
const FormComponent = forwardRef<FormItemsRef, FormProps>(
  (
    {
      // Value & Display Value
      layout = 'horizontal',
      labelSpan,
      labelEllipsis,
      mainSpan,
      mainEllipsis,
      virtual,
      // Style
      style,
      className,
      // Elements
      children,
      // Value & Display Value
      form,
      name,
      validateMessages,
      initialValues,
      // Events
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
