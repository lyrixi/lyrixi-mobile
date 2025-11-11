import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import Checkbox from '../Checkbox'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

// Checkbox-Group
const CheckboxGroup = forwardRef(
  (
    {
      className,
      iconRender,
      iconPosition = 'left',

      allowClear,
      multiple,
      value,
      list,

      readOnly,
      disabled,

      onChange,
      style
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
        style={style}
        disabled={disabled}
        readOnly={readOnly}
        className={DOMUtil.classNames('lyrixi-checkbox-group', className)}
        ref={rootRef}
      >
        {Array.isArray(list) && list.length
          ? list.map((item) => {
              if (!item?.id) return null
              return (
                <Checkbox
                  key={item.id}
                  iconRender={iconRender}
                  iconPosition={iconPosition}
                  checked={value?.findIndex?.((valueItem) => valueItem?.id === item.id) >= 0}
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
                        newValue = allowClear ? null : [item]
                      } else {
                        newValue = [item]
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
