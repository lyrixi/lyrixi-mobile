import React, { Fragment, forwardRef, useRef, useImperativeHandle } from 'react'
import viewFormatter from './viewFormatter'
import getSpaceDates from './getSpaceDates'
import Item from './../Item'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

// List
const List = (
  {
    // Value & Display Value
    value,
    list,
    /*
    {
      position: 'left',
      avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg',
      id: '选项1',
      authorNode: '选项1',
      content: '自定义内容',
      time: new Date()
    }
    */
    formatViewList,
    formatViewItem,

    // Status
    checkable,
    // Elements
    checkboxVariant,
    timeSpace = 60000, // 时间间隔, 单位 ms, 默认1分钟

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

  // 获取单项
  function getItemNode(item, index) {
    return (
      <Item
        key={item.id ?? item._raw?.id ?? index}
        // Value & Display Value
        _raw={item._raw ?? { id: item.id ?? index }}
        // Status
        checkable={checkable}
        checkboxVariant={checkboxVariant}
        checked={value?.findIndex?.((valueItem) => valueItem?.id === item.id) >= 0}
        // Style
        position={item.position}
        // Elements
        avatarUrl={item.avatarUrl}
        avatarRender={item.avatarRender}
        avatarNode={item.avatarNode}
        authorRender={item.authorRender}
        authorNode={item.authorNode || item.name}
        content={item.content}
        // Events
        onChange={(checked) => {
          let newValue = null
          if (!checked) {
            newValue = value.filter((valueItem) => valueItem?.id !== item.id)
          } else {
            newValue = [...(value || []), item]
          }
          onChange && onChange(newValue)
        }}
      />
    )
  }

  // 时间分栏
  let dates = []

  return (
    <div className="lyrixi-chat-list" ref={rootRef}>
      {displayList?.map?.((item, index) => {
        let bar = null
        if (item.time) {
          let spaceDates = getSpaceDates(item.time, dates, timeSpace)
          dates = spaceDates.dates
          // 超过时间间隔，则显示时间分栏
          if (spaceDates.isOverTime) {
            bar = (
              <div className="lyrixi-chat-divider-time">
                {DateUtil.format(item.time, 'YYYY-MM-DD hh:mm')}
              </div>
            )
          }
        }

        return (
          <Fragment key={index}>
            {bar}
            {getItemNode(item, index)}
          </Fragment>
        )
      })}
    </div>
  )
}

export default forwardRef(List)
