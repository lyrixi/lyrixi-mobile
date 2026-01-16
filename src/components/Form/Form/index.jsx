import React, { forwardRef } from 'react'
import Form from 'rc-field-form'
import Items from './../components/Items'

// layout: horizontal | vertical | inline
const FormComponent = forwardRef(
  (
    {
      // Transparent to children properties
      layout = 'horizontal',
      labelCol,
      mainCol,
      scrollerElement,
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
          labelCol={labelCol}
          mainCol={mainCol}
          scrollerElement={scrollerElement}
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
