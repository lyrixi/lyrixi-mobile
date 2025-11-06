import React from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 标签
const Tag = ({ style, className, name, readOnly, disabled, allowClear, onEdit, onDelete }) => {
  return (
    <div
      className={DOMUtil.classNames('lyrixi-select-tags-item', className)}
      style={style}
      onClick={
        readOnly || disabled
          ? undefined
          : (e) => {
              onEdit && onEdit()
              e.stopPropagation()
            }
      }
    >
      {name}
      {readOnly || disabled || !allowClear ? null : (
        <i
          className="lyrixi-select-tags-item-clear"
          onClick={(e) => {
            onDelete && onDelete()
            e.stopPropagation()
          }}
        ></i>
      )}
    </div>
  )
}

export default Tag
