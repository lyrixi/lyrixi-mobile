import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Checkbox from '../Checkbox'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

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
                ? value.some((valueItem) => valueItem?.id === item.id)
                : value?.id === item.id

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
                        newValue = value.filter((valueItem) => valueItem?.id !== item.id)
                      } else {
                        newValue = [...(value || []), item]
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
