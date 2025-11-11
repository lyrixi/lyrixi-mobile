import React, { Fragment } from 'react'
import Tag from './Tag'
import InputNode from './../../Node'

// 标签模式
const Tags = ({
  // 分隔符
  separator,
  // 左右图标
  leftIconNode,
  rightIconNode,
  clearRender,
  className,
  style,
  placeholder,
  readOnly,
  disabled,
  allowClear,
  value,
  onAdd,
  onEdit,
  onChange
}) => {
  return (
    <InputNode
      leftIconNode={leftIconNode}
      rightIconNode={rightIconNode}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      style={style}
      onClick={onAdd}
      value={value}
      onChange={onChange}
      allowClear={allowClear}
      clearRender={clearRender}
      placeholder={placeholder}
      formatter={() => {
        if (Array.isArray(value)) {
          return value.map((item, index) => {
            return (
              <Fragment key={item.id || index}>
                <Tag
                  className={item.className}
                  style={item.style}
                  name={item.name}
                  readOnly={item.readOnly}
                  disabled={item.disabled}
                  allowClear={item.allowClear}
                  onEdit={() => {
                    onEdit && onEdit(item)
                  }}
                  onDelete={() => {
                    let currentValue = value.filter((valueItem) => valueItem.id !== item.id)
                    onChange && onChange(currentValue, { action: 'clickDelete' })
                  }}
                />
                {index < value.length - 1 && separator ? separator : null}
              </Fragment>
            )
          })
        }
        return null
      }}
    />
  )
}

export default Tags
