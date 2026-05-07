import React from 'react'


import type { KeyboardButtonQuickProps } from './../types'

// 内库使用-start
import DOMUtil from '../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const ButtonQuick = ({ onClick, className = '', children }: KeyboardButtonQuickProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div
      className={DOMUtil.classNames('lyrixi-keyboard-button-quick', className)}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default ButtonQuick
