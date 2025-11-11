import React, { forwardRef } from 'react'

// 内库使用-start
import Checkbox from './../Checkbox'
// 内库使用-end

/* 测试使用-start
import { Checkbox } from 'lyrixi-mobile'
测试使用-end */

const Radio = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,

      // Status
      disabled,
      readOnly,
      allowClear,
      multiple = false, // Radio 默认单选

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
    return (
      <Checkbox.Group
        ref={ref}
        // Value & Display Value
        value={value}
        list={list}
        // Status
        disabled={disabled}
        readOnly={readOnly}
        allowClear={allowClear}
        multiple={multiple}
        // Style
        className={className}
        style={style}
        // Element
        iconRender={
          iconRender === undefined
            ? () => <span className="lyrixi-checkbox-icon lyrixi-radio" />
            : iconRender
        }
        iconPosition={iconPosition}
        // Events
        onChange={onChange}
      />
    )
  }
)

Radio.Group = Checkbox.Group

export default Radio
