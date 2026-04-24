import React, { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import Checkbox, { CheckboxProps } from '../Checkbox'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import formatValue from './formatValue'

export interface CheckboxListItem {
  id: string | number
  name?: string
  [key: string]: unknown
}

export interface CheckboxGroupRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CheckboxGroupProps {
  value?: unknown
  list?: CheckboxListItem[]
  /** Demos / Select-style API; group itself does not render a placeholder */
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  allowClear?: boolean
  multiple?: boolean
  className?: string
  style?: React.CSSProperties
  iconRender?: CheckboxProps['iconRender']
  iconPosition?: CheckboxProps['iconPosition']
  onChange?: (value: CheckboxListItem | CheckboxListItem[] | null) => void
}

// Checkbox-Group
const CheckboxGroup = forwardRef<CheckboxGroupRef, CheckboxGroupProps>(
  (
    {
      value,
      list,
      placeholder: _placeholder,
      disabled,
      readOnly,
      allowClear,
      multiple,
      className,
      style,
      iconRender,
      iconPosition = 'left',
      onChange
    },
    ref
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => {
          return rootRef.current
        }
      }
    })

    const formattedValue = useMemo(
      () => formatValue(value, list ?? [], multiple ?? false),
      [value, list, multiple]
    )

    return (
      <div
        ref={rootRef}
        disabled={disabled}
        readOnly={readOnly}
        style={style}
        className={DOMUtil.classNames('lyrixi-checkbox-group', className)}
      >
        {Array.isArray(list) && list.length
          ? list.map((item) => {
            if (!item?.id) return null

            const isChecked = multiple
              ? Array.isArray(formattedValue) && formattedValue.some((valueItem) => valueItem?.id === item.id)
              : !Array.isArray(formattedValue) && formattedValue?.id === item.id

            return (
              <Checkbox
                key={String(item.id)}
                checked={isChecked}
                iconRender={iconRender}
                iconPosition={iconPosition}
                onChange={(checked) => {
                  let newValue: CheckboxListItem | CheckboxListItem[] | null = null
                  if (multiple) {
                    const currentArr = Array.isArray(formattedValue) ? formattedValue : []
                    if (!checked) {
                      newValue = currentArr.filter((valueItem) => valueItem?.id !== item.id)
                    } else {
                      newValue = [...currentArr, item]
                    }
                  } else {
                    if (!checked) {
                      newValue = allowClear ? null : item
                    } else {
                      newValue = item
                    }
                  }
                  onChange && onChange(newValue)
                }}
              >
                {String(item.name || '')}
              </Checkbox>
            )
          })
          : null}
      </div>
    )
  }
)

export default CheckboxGroup
