import React, { useImperativeHandle, useRef, forwardRef } from 'react'

// 内库使用-start
import DateUtil from './../../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// 用于自定义渲染Combo, 按照要求返回comboElement
const Combo = forwardRef(
  (
    {
      // Value & Display Value
      value,

      // Style
      style,
      className,

      // Element
      children,

      // Events
      onClick
    },
    ref
  ) => {
    const comboRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        element: comboRef.current,
        getElement: () => {
          return comboRef.current
        }
      }
    })

    return (
      <div ref={comboRef} style={style} className={className} onClick={onClick}>
        {DateUtil.format(value, 'week')}
      </div>
    )
  }
)

export default Combo
