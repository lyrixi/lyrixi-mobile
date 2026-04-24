import React, { forwardRef } from 'react'
import Edit from './Edit'
import Add from './Add'

import type { ComboAddRef } from './Add'
import type { EditRef } from './Edit'

export interface ComboProps {
  value?: string
  allowClear?: boolean
  className?: string
  style?: React.CSSProperties
  modalClassName?: string
  modalStyle?: React.CSSProperties
  maskStyle?: React.CSSProperties
  maskClassName?: string
  portal?: Element
  color?: string
  backgroundColor?: string
  onChange?: (base64: string | null) => void
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export type ComboInstanceRef = ComboAddRef | EditRef

// Combo
const Combo = (
  {
    // Value & Display Value
    value,

    // Status
    allowClear = true,

    // Style
    className,
    style,
    modalClassName,
    modalStyle,
    maskStyle,
    maskClassName,

    // Element
    portal,
    color, // 绘画配置: 画笔颜色
    backgroundColor, // 绘画配置: 背景颜色

    // Events
    onChange,
    onPreview
  }: ComboProps,
  ref: React.Ref<ComboInstanceRef>
) => {
  // 已签显示图片
  if (value && typeof value === 'string') {
    return (
      <Edit
        ref={ref}
        // Value & Display Value
        value={value}
        // Events
        onDelete={allowClear ? onChange : undefined}
        onPreview={onPreview}
      />
    )
  }

  // 未签显示添加按钮
  return (
    <Add
      ref={ref}
      // Value & Display Value
      value={value}
      // Style
      className={className}
      style={style}
      modalClassName={modalClassName}
      modalStyle={modalStyle}
      // Element
      color={color} // 绘画配置: 画笔颜色
      backgroundColor={backgroundColor} // 绘画配置: 背景颜色
      // Events
      onChange={onChange}
    />
  )
}

export default forwardRef<ComboInstanceRef, ComboProps>(Combo)
