import React, { useImperativeHandle, forwardRef, useRef } from 'react'
// import Sortable from 'sortablejs'
import { ReactSortable } from 'react-sortablejs'
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'

import Card from './../../Card'
import Item from './Item'

// 穿梭框
const Transfer = (
  {
    // Value & Display Value
    value,
    list,
    titles,

    // Status
    open,
    allowClear,

    // Style
    className,
    style,

    // Events
    onChange
  },
  ref
) => {
  // 容器
  const mainRef = useRef(null)

  // 暴露方法
  useImperativeHandle(ref, () => {
    return {
      mainDOM: mainRef.current,
      getMainDOM: () => mainRef.current
    }
  })

  // 删除
  function handleDelete(item, index) {
    if (onChange) {
      onChange(
        value.filter((selected) => {
          return selected.id !== item.id
        })
      )
    }
  }

  // 添加
  function handleAdd(item, index) {
    for (let originItem of list) {
      if (originItem.id === item.id) {
        if (onChange) {
          onChange([...value, item])
        }
        break
      }
    }
  }

  // 未选列表
  let unSelectedList = list?.filter(
    (item, index) => !value?.some((selected) => selected.id === item.id)
  )

  return (
    <div
      ref={mainRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-transfer-main', className)}
    >
      {/* Element: Selected List */}
      {value?.length ? (
        <>
          {/* Element: Selected Title */}
          <div className="lyrixi-transfer-title">
            <div className="lyrixi-transfer-title-content">
              {titles?.selected || LocaleUtil.locale('已添加', 'lyrixi.added')}
            </div>
            {`${value.length}/${list?.length || 0}`}
          </div>
          
          {/* Element: Sortable List */}
          <ReactSortable
            className="lyrixi-card lyrixi-transfer-card"
            // Value & Display Value
            list={value}
            // Events
            setList={(newValue) => {
              // 如果值未发生变化则不触发onChange
              if (
                JSON.stringify(value.map((item) => item.id)) ===
                JSON.stringify(newValue.map((item) => item.id))
              ) {
                return
              }
              if (onChange) {
                onChange(newValue)
              }
            }}
          >
            {value.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  // Events
                  onDelete={() => handleDelete(item, index)}
                  sortable
                >
                  {item?.name || ''}
                </Item>
              )
            })}
          </ReactSortable>
        </>
      ) : null}

      {/* Element: Unselected List */}
      {unSelectedList?.length ? (
        <>
          {/* Element: Unselected Title */}
          <div className="lyrixi-transfer-title">
            <div className="lyrixi-transfer-title-content">
              {titles?.unSelected || LocaleUtil.locale('未添加', 'lyrixi.not.added')}
            </div>
            {`${unSelectedList.length}/${list?.length || 0}`}
          </div>
          
          {/* Element: Card */}
          <Card className="lyrixi-transfer-card">
            {unSelectedList.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  // Events
                  onAdd={() => handleAdd(item, index)}
                >
                  {item?.name || ''}
                </Item>
              )
            })}
          </Card>
        </>
      ) : null}
    </div>
  )
}

export default forwardRef(Transfer)
