import React from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

interface ItemProps {
  checked?: boolean
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  children?: React.ReactNode
}

const Item = ({ checked, disabled, style, className, onClick, children }: ItemProps) => {
  return (
    <div
      style={style}
      className={DOMUtil.classNames(
        'lyrixi-actionsheet-item',
        className,
        disabled ? 'lyrixi-disabled' : '',
        checked ? 'lyrixi-checked' : ''
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(e)
      }}
    >
      {children}
    </div>
  )
}

export default Item
