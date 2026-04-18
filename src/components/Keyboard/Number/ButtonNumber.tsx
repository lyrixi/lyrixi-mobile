import React from 'react'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */
const ButtonNumber = ({ children, onClick, className = '' }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    if (onClick) {
      onClick(children)
    }
  }

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-keyboard-button lyrixi-keyboard-button-number',
        className
      )}
      onTouchStart={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonNumber
