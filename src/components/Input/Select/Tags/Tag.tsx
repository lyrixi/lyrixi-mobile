import React from 'react'

import type { InputSelectTagProps } from './Input.Select.Tags.Tag.types'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Icon from './../../../Icon'
import Icons from '../../../../icons'
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
        <Icon
          svg={Icons.Close}
          size="xxxs"
          className="lyrixi-select-tags-item-clear"
          onClick={(e) => {
            onDelete?.()
            e.stopPropagation()
          }}
        />
      )}
    </div>
  )
}

export default Tag
