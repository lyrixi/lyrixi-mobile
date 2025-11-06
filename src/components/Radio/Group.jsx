import React, { forwardRef } from 'react'

// 内库使用-start
import Checkbox from './../Checkbox'
// 内库使用-end

/* 测试使用-start
import { Checkbox } from 'lyrixi-mobile'
测试使用-end */

const Radio = forwardRef(({ icon, className, ...props }, ref) => {
  return (
    <Checkbox.Group
      ref={ref}
      {...props}
      icon={icon === undefined ? <span className={`lyrixi-checkbox-icon lyrixi-radio`} /> : icon}
      multiple={false}
    />
  )
})

Radio.Group = Checkbox.Group

export default Radio
