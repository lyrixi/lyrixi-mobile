import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Item = ({ checked, disabled, style, className, onClick, children }) => {
  return (
    <div
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-actionsheet-option',
        className,
        disabled ? 'lyrixi-disabled' : '',
        checked ? 'lyrixi-checked' : ''
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
    >
      {children}
    </div>
  )
}

export default Item
