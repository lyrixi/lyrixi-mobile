import React from 'react'

import type { InputSelectTagProps } from './Input.Select.Tags.types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 标签
const Tag = ({
  style,
  className,
  name,
  readOnly,
  disabled,
  allowClear,
  onEdit,
  onDelete
}: InputSelectTagProps) => {
  return (
    <div
      className={DOMUtil.classNames('lyrixi-select-tags-item', className)}
      style={style}
      onClick={
        readOnly || disabled
          ? undefined
          : (e) => {
              onEdit?.()
              e.stopPropagation()
            }
      }
    >
      {name}
      {readOnly || disabled || !allowClear ? null : (
        <i
          className="lyrixi-select-tags-item-clear"
          onClick={(e) => {
            onDelete?.()
            e.stopPropagation()
          }}
        ></i>
      )}
    </div>
  )
}

export default Tag
