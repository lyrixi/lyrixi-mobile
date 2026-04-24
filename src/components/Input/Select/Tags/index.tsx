import React, { Fragment } from 'react'
import Tag from './Tag'
import InputNode from './../../Node'
import { InputNodeProps } from './../../Node'

interface TagItem {
  id?: string | number
  name?: string
  className?: string
  style?: React.CSSProperties
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  [key: string]: unknown
}

interface TagsProps {
  separator?: string
  leftIconNode?: React.ReactNode
  rightIconNode?: React.ReactNode
  clearRender?: InputNodeProps['clearRender']
  className?: string
  style?: React.CSSProperties
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  value?: TagItem | TagItem[]
  onAdd?: (e: React.MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: TagItem) => void
  onChange?: (value: TagItem[], meta?: { action: string }) => void
}

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
}: TagsProps) => {
  return (
    <InputNode
      leftIconNode={leftIconNode}
      rightIconNode={rightIconNode}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      style={style}
      onClick={onAdd}
      value={typeof value === 'string' ? value : undefined}
      onChange={onChange as InputNodeProps['onChange']}
      allowClear={allowClear}
      clearRender={clearRender}
      placeholder={placeholder}
      formatter={() => {
        if (Array.isArray(value)) {
          return value.map((item, index) => {
            return (
              <Fragment key={String(item.id || index)}>
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
                    let currentValue = (value as TagItem[]).filter((valueItem) => valueItem.id !== item.id)
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
