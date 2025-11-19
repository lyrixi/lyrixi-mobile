import React, { forwardRef, useRef, useImperativeHandle, useMemo } from 'react'
import Checkbox from '../Checkbox'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import formatValue from './formatValue'

// Checkbox-Group
const CheckboxGroup = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,

      // Status
      disabled,
      readOnly,
      allowClear,
      multiple,

      // Style
      className,
      style,

      // Element
      iconRender,
      iconPosition = 'left',

      // Events
      onChange
    },
    ref
  ) => {
    // 节点
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    // 格式化 value：将字符串 ID 转换为完整对象
    const formattedValue = useMemo(
      () => formatValue(value, list, multiple),
      [value, list, multiple]
    )

    return (
      <div
        ref={rootRef}
        // Status
        disabled={disabled}
        readOnly={readOnly}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-checkbox-group', className)}
      >
        {/* Element: Checkboxes */}
        {Array.isArray(list) && list.length
          ? list.map((item) => {
              if (!item?.id) return null

              const isChecked = multiple
                ? formattedValue.some((valueItem) => valueItem?.id === item.id)
                : formattedValue?.id === item.id

              return (
                <Checkbox
                  key={item.id}
                  // Value & Display Value
                  checked={isChecked}
                  // Element
                  iconRender={iconRender}
                  iconPosition={iconPosition}
                  // Events
                  onChange={(checked) => {
                    let newValue = null
                    // 多选
                    if (multiple) {
                      if (!checked) {
                        newValue = formattedValue.filter((valueItem) => valueItem?.id !== item.id)
                      } else {
                        newValue = [...(formattedValue || []), item]
                      }
                    }
                    // 单选
                    else {
                      if (!checked) {
                        newValue = allowClear ? null : item
                      } else {
                        newValue = item
                      }
                    }
                    onChange && onChange(newValue)
                  }}
                >
                  {item.name || ''}
                </Checkbox>
              )
            })
          : null}
      </div>
    )
  }
)

export default CheckboxGroup
