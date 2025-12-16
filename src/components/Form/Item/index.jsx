import React, { forwardRef } from 'react'
import { Field } from 'rc-field-form'

// 内库使用-start
import Typography from '../../Typography'
// 内库使用-end

/* 测试使用-start
import { Typography } from 'lyrixi-mobile'
测试使用-end */

const { Item, Label, Main } = Typography.Form

const FormItem = forwardRef(
  (
    {
      // Field properties
      name, // field required property
      valuePropName,
      shouldUpdate,
      initialValue,
      validateTrigger, // onBlur
      rules,

      // Value & Display Value
      id,

      // Style
      style,
      className,
      layout,
      labelCol,
      mainCol,

      // Elements
      label,
      inputExtraRender,
      extraRender,
      help,
      children
    },
    ref
  ) => {
    return (
      <Field
        rules={rules}
        name={name}
        valuePropName={valuePropName}
        shouldUpdate={shouldUpdate}
        initialValue={initialValue}
        validateTrigger={validateTrigger}
      >
        {(control, renderMeta, context) => {
          return (
            <Item
              ref={ref}
              id={id}
              name={name}
              // Value & Display Value

              // Style
              style={style}
              className={className}
              layout={layout}
            >
              <Label
                // Value & Display Value
                ellipsis={labelCol?.ellipsis}
                // Style
                style={labelCol?.style}
                className={labelCol?.className}
                span={labelCol?.span}
                // Validate
                required={(rules || []).some((rule) => rule.required)}
                // Element
                help={help}
              >
                {label}
              </Label>
              <Main
                // Value & Display Value
                ellipsis={mainCol?.ellipsis}
                // Style
                style={mainCol?.style}
                className={mainCol?.className}
                span={mainCol?.span}
                // Element
                errorMessage={renderMeta?.errors?.[0] || ''}
                inputExtraNode={inputExtraRender?.({ errors: renderMeta?.errors })}
                extraNode={extraRender?.({ errors: renderMeta?.errors })}
              >
                {/* In Form, Set value and onChange props to children: */}
                {React.Children.map(children, (child) => {
                  // 检查是否是一个 React 组件（函数组件或类组件），而不是原生元素
                  if (React.isValidElement(child) && typeof child.type !== 'string') {
                    // 克隆该组件并注入新的属性
                    return React.cloneElement(child, {
                      value: control?.value,
                      onChange: (...changeProps) => {
                        // 调用原有onChange（如果存在）
                        if (typeof child.props.onChange === 'function') {
                          child.props.onChange(...changeProps)
                        }
                        // 执行父组件的逻辑
                        control?.onChange && control.onChange(...changeProps)
                      }
                    })
                  }
                  // 如果是原生元素，直接返回
                  return child
                })}
              </Main>
            </Item>
          )
        }}
      </Field>
    )
  }
)

export default FormItem
