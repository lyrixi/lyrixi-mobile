import React, { forwardRef } from 'react'
import { Field } from 'rc-field-form'
import type { Meta } from 'rc-field-form/lib/interface'

import type { FormItemProps, FormItemRef } from '../types'

import Item from './../components/Item'
import Label from './../components/ItemLabel'
import Main from './../components/ItemMain'

const FormItem = forwardRef<FormItemRef, FormItemProps>(
  (
    {
      // Field properties
      name,
      valuePropName,
      shouldUpdate,
      initialValue,
      validateTrigger,
      rules,

      // Value & Display Value
      id,

      // Status
      labelEllipsis,
      labelSpan,
      mainSpan,
      mainEllipsis,

      // Style
      style,
      className,
      layout,
      height,
      maxLength: _maxLength,
      labelStyle,
      labelClassName,
      mainStyle,
      mainClassName,

      // Elements
      label,
      labelHelp,
      inputExtraRender,
      extraRender,
      extra,
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
        {(control: Record<string, unknown>, renderMeta: Meta) => {
          return (
            <Item
              ref={ref}
              id={id}
              name={typeof name === 'string' ? name : undefined}
              // Value & Display Value

              // Style
              style={style}
              className={className}
              layout={layout}
              height={height}
            >
              <Label
                // Value & Display Value
                ellipsis={labelEllipsis}
                // Style
                style={labelStyle}
                className={labelClassName}
                span={labelSpan}
                // Validate
                required={(rules || []).some((rule) => typeof rule === 'object' && !('validator' in rule) ? rule.required : false)}
                // Element
                help={labelHelp}
              >
                {label}
              </Label>
              <Main
                // Status
                ellipsis={mainEllipsis}
                span={mainSpan}
                // Style
                style={mainStyle}
                className={mainClassName}
                // Element
                errorMessage={renderMeta?.errors?.[0] || ''}
                inputExtraNode={inputExtraRender?.({ errors: renderMeta?.errors ?? [] })}
                extraNode={
                  extra?.({ value: control?.value }) ?? extraRender?.({ errors: renderMeta?.errors ?? [] })
                }
              >
                {/* In Form, Set value and onChange props to children: */}
                {React.Children.map(children, (child) => {
                  // 检查是否是一个 React 组件（函数组件或类组件），而不是原生元素
                  if (React.isValidElement(child) && typeof child.type !== 'string') {
                    // 克隆该组件并注入新的属性
                    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
                      value: control?.value,
                      onChange: (...changeProps: unknown[]) => {
                        // 调用原有onChange（如果存在）
                        const childOnChange = (child.props as Record<string, unknown>).onChange
                        if (typeof childOnChange === 'function') {
                          childOnChange(...changeProps)
                        }
                        // 执行父组件的逻辑
                        const controlOnChange = control?.onChange
                        if (typeof controlOnChange === 'function') {
                          controlOnChange(...changeProps)
                        }
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
