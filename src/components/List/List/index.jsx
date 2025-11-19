import React, { Fragment, forwardRef, useRef, useImperativeHandle } from 'react'
import GroupTitle from './../GroupTitle'
import Item from './../Item'

// List
const List = (
  {
    // Value & Display Value
    value,
    multiple,
    allowClear,
    list,
    /*
    // Group
    {
      name: '',
      children: ...
    },
    // No Group
    {
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?lyrixi=3',
      id: '选项1',
      name: '选项1',
      description: '普通描述',
      content: '自定义内容',
      action: ''
    }
    */

    // Status
    checkable,

    // Style
    itemLayout,

    // Elements
    itemRender,
    checkboxRender,

    // Events
    onChange
  },
  ref
) => {
  // Expose
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      rootDOM: rootRef.current,
      getRootDOM: () => {
        return rootRef.current
      }
    }
  })

  function handleChange(item, { checked }) {
    let newValue = null
    // 多选
    if (multiple) {
      if (!checked) {
        newValue = (value || []).filter((valueItem) => valueItem?.id !== item.id)
      } else {
        newValue = [...(value || []), item]
      }
    }
    // 单选
    else {
      if (!checked) {
        newValue = allowClear ? null : item
      } else {
        newValue = item
      }
    }
    onChange && onChange(newValue, { checked: checked, item: item })
  }

  // 获取单项
  function getItemNode(item, index) {
    let checked = multiple
      ? value?.findIndex?.((valueItem) => valueItem?.id === item.id) >= 0
      : value?.id === item.id

    if (typeof itemRender === 'function') {
      return itemRender(item, { checked, onChange: handleChange })
    }

    return (
      <Item
        key={item.id ?? index}
        // Item Data
        item={item}
        // Style
        disabled={item.disabled}
        imageUrl={item.imageUrl}
        avatarUrl={item.avatarUrl}
        title={item.name}
        description={item.description}
        note={item.note}
        content={item.content}
        action={item.action}
        // GLobal Config
        itemLayout={itemLayout}
        checkable={checkable}
        checkboxRender={checkboxRender}
        checked={checked}
        onClick={(e) => {
          e.stopPropagation()
          handleChange(item, { checked: !checked })
        }}
      />
    )
  }

  return (
    <div className="lyrixi-list" ref={rootRef}>
      {Array.isArray(list) &&
        list.map((item, index) => {
          // 渲染分组列表
          if (Array.isArray(item.children)) {
            return (
              <Fragment key={item.id ?? index}>
                <GroupTitle title={item.name} anchor={item.anchor} description={item.description} />

                {/* list-items: 原本想包一层, 但VirtualList无法分组包裹 */}
                {item.children.map((option, optionIndex) => {
                  return getItemNode(option, optionIndex)
                })}
              </Fragment>
            )
          }

          // 渲染列表
          return getItemNode(item, index)
        })}
    </div>
  )
}

export default forwardRef(List)
