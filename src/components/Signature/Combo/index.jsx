import React, { forwardRef } from 'react'
import Edit from './Edit'
import Add from './Add'

// Combo
const Combo = (
  {
    value,
    allowClear = true,
    onChange,
    onPreview,
    modalClassName,
    modalStyle,
    maskStyle,
    maskClassName,
    portal,
    // 绘画配置
    color,
    backgroundColor,
    className,
    style
  },
  ref
) => {
  // 已签显示图片
  if (value && typeof value === 'string') {
    return (
      <Edit
        ref={ref}
        value={value}
        onDelete={allowClear ? onChange : undefined}
        onPreview={onPreview}
      />
    )
  }

  // 未签显示添加按钮
  return (
    <Add
      ref={ref}
      value={value}
      onChange={onChange}
      modalClassName={modalClassName}
      modalStyle={modalStyle}
      maskStyle={maskStyle}
      maskClassName={maskClassName}
      portal={portal}
      // 绘画配置
      color={color}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    />
  )
}

export default forwardRef(Combo)
