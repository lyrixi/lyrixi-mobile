import React, { forwardRef } from 'react'
import Checkbox from './../Checkbox'

const Radio = forwardRef(
  (
    {
      // Value & Display Value
      checked,

      // Status
      readOnly,
      disabled,

      // Style
      style,
      className,

      // Element
      children,
      iconRender,
      iconPosition = 'left',

      // Events
      onChange
    },
    ref
  ) => {
    return (
      <Checkbox
        ref={ref}
        // Value & Display Value
        checked={checked}
        // Status
        readOnly={readOnly}
        disabled={disabled}
        // Style
        style={style}
        className={className}
        // Element
        iconRender={
          iconRender === undefined
            ? () => <span className="lyrixi-checkbox-icon lyrixi-radio" />
            : iconRender
        }
        iconPosition={iconPosition}
        // Events
        onChange={onChange}
      >
        {children}
      </Checkbox>
    )
  }
)

Radio.Group = Checkbox.Group

export default Radio
