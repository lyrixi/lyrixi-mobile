import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import viewFormatter from './viewFormatter'
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
    formatViewList,
    formatViewItem,
    /*
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
    checkboxVariant,
    checkboxPosition,

    // Elements
    itemRender,

    // Events
    onChange
  },
  ref
) => {
  // 格式化为渲染list, 原list记录到_raw中
  let displayList = viewFormatter(list, { formatViewList, formatViewItem })

  // Expose
  const rootRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => {
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
    onChange && onChange(newValue, { checkedItem: _raw })
  }

  // 获取单项
  function getItemNode(item, index) {
    let checked = multiple
      ? value?.findIndex?.((valueItem) => valueItem?.id === item?._raw?.id) >= 0
      : value?.id === item?._raw?.id

    if (typeof itemRender === 'function') {
      return itemRender(item, { index, checked, onChange: handleChange })
    }

    return (
      <Item
        key={item.id ?? item._raw?.id ?? index}
        // Value & Display Value
        _raw={item._raw ?? { id: item.id ?? index }}
        checked={checked}
        // Status
        disabled={item.disabled}
        checkable={checkable}
        // Style
        style={{ ...itemStyle, ...item.style }}
        className={{ ...itemClassName, ...item.className }}
        layout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        // Elements
        imageUrl={item.imageUrl}
        imageRender={item.imageRender}
        avatarUrl={item.avatarUrl}
        avatarRender={item.avatarRender}
        title={item.title || item.name}
        description={item.description}
        note={item.note}
        content={item.content}
        actionRender={item.actionRender}
        // Events
        onSelect={handleChange}
      />
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-list', className)} ref={rootRef} style={style}>
      {Array.isArray(displayList) &&
        displayList.map((item, index) => {
          return getItemNode(item, index)
        })}
    </div>
  )
}

export default forwardRef(List)
