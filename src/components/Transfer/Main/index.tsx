import React, { useImperativeHandle, forwardRef, useRef } from 'react'
import { ReactSortable } from 'react-sortablejs'
import LocaleUtil from './../../../utils/LocaleUtil'
import DOMUtil from './../../../utils/DOMUtil'

import Card from './../../Card'
import Item from './Item'
import type { TransferItem, TransferMainProps, TransferTitles } from './../types'

function normalizeTitles(
  titles: TransferMainProps['titles']
): TransferTitles | undefined {
  if (titles == null) return undefined
  if (Array.isArray(titles)) {
    return { selected: titles[0], unSelected: titles[1] }
  }
  return titles
}

// 穿梭框
const Transfer = forwardRef<unknown, TransferMainProps>(function TransferMain(
  {
    // Value & Display Value
    value,
    list,
    titles: titlesProp,
    // Status
    open: _open,
    allowClear: _allowClear,
    // Style
    className,
    style,
    // Events
    onChange
  },
  ref
) {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const titles = normalizeTitles(titlesProp)

  // 暴露方法
  useImperativeHandle(ref, () => {
    return {
      mainElement: mainRef.current,
      getMainElement: () => mainRef.current
    }
  })

  // 删除
  function handleDelete(item: TransferItem, _index: number) {
    if (onChange) {
      onChange(
        value.filter((selected) => {
          return selected.id !== item.id
        })
      )
    }
  }

  // 添加
  function handleAdd(item: TransferItem, _index: number) {
    for (const originItem of list) {
      if (originItem.id === item.id) {
        if (onChange) {
          onChange([...value, item])
        }
        break
      }
    }
  }

  // 未选列表
  const unSelectedList = list?.filter(
    (item, _index) => !value?.some((selected) => selected.id === item.id)
  )

  return (
    <div
      ref={mainRef}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-transfer-main', className)}
    >
      {/* Elements: Selected List */}
      {value?.length ? (
        <>
          {/* Elements: Selected Title */}
          <div className="lyrixi-transfer-title">
            <div className="lyrixi-transfer-title-content">
              {titles?.selected ||
                LocaleUtil.locale('已添加', 'lyrixi_b189550a0d1f8bf9c727d54b977a9628')}
            </div>
            {`${value.length}/${list?.length || 0}`}
          </div>

          {/* Elements: Sortable List */}
          <ReactSortable
            className="lyrixi-card lyrixi-transfer-card"
            // Value & Display Value
            list={value}
            // Events
            setList={(newValue: TransferItem[]) => {
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
                  key={String(item.id)}
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

      {/* Elements: Unselected List */}
      {unSelectedList?.length ? (
        <>
          {/* Elements: Unselected Title */}
          <div className="lyrixi-transfer-title">
            <div className="lyrixi-transfer-title-content">
              {titles?.unSelected ||
                LocaleUtil.locale('未添加', 'lyrixi_31060b9b7836e3da9aefb65c841e2e07')}
            </div>
            {`${unSelectedList.length}/${list?.length || 0}`}
          </div>

          {/* Elements: Card */}
          <Card className="lyrixi-transfer-card">
            {unSelectedList.map((item, index) => {
              return (
                <Item
                  key={String(item.id)}
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
})

export default Transfer
