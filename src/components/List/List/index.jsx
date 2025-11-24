import React, { Fragment, forwardRef, useRef, useImperativeHandle } from 'react'
import GroupTitle from './../GroupTitle'
import Item from './../Item'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

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
      title: '',
      children: ...
    },
    // No Group
    {
      _raw: 原始数据, 必传,
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      id: '选项1',
      title: '选项1',
      description: '普通描述',
      content: '自定义内容',
      actionRender: () => {
        return <Button>action</Button>
      }
    }
    */

    // Status
    checkable,

    // Style
    style,
    className,
    itemStyle,
    itemClassName,
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

  // 回传带checked属性的原始数据
  function handleChange(_raw) {
    let newValue = null
    // 多选
    if (multiple) {
      if (!_raw.checked) {
        newValue = (value || []).filter((valueItem) => valueItem?.id !== _raw.id)
      } else {
        newValue = [...(value || []), _raw]
      }
    }
    // 单选
    else {
      if (!_raw.checked) {
        newValue = allowClear ? null : _raw
      } else {
        newValue = _raw
      }
    }
    onChange && onChange(newValue, _raw)
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
        // Value & Display Value
        id={item.id ?? index}
        _raw={item._raw}
        checked={checked}
        // Status
        disabled={item.disabled}
        checkable={checkable}
        // Style
        style={{ ...itemStyle, ...item.style }}
        className={{ ...itemClassName, ...item.className }}
        layout={itemLayout}
        // Elements
        imageUrl={item.imageUrl}
        avatarUrl={item.avatarUrl}
        title={item.title}
        description={item.description}
        note={item.note}
        content={item.content}
        actionRender={item.actionRender}
        checkboxRender={checkboxRender}
        // Events
        onSelect={handleChange}
      />
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-list', className)} ref={rootRef} style={style}>
      {Array.isArray(list) &&
        list.map((item, index) => {
          // 渲染分组列表
          if (Array.isArray(item.children)) {
            return (
              <Fragment key={item.id ?? index}>
                <GroupTitle
                  title={item.title}
                  anchor={item.anchor}
                  description={item.description}
                  style={item.style}
                  className={item.className}
                />

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
