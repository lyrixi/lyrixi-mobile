import React, { Fragment, forwardRef, useRef, useImperativeHandle } from 'react'
import viewFormatter from './viewFormatter'
import HeaderItem from './../HeaderItem'
import Item from './../Item'


import type { ItemChangeArg, ListProps, ListRef, RawItem, ViewItem } from './../types'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// List
const List = (
  {
    value,
    multiple,
    allowClear,
    list,
    formatViewList,
    formatViewItem,
    checkable,
    style,
    className,
    itemStyle,
    itemClassName,
    itemLayout,
    checkboxVariant,
    checkboxPosition,
    itemRender,
    onChange
  }: ListProps,
  ref: React.Ref<ListRef>
) => {
  let displayList = viewFormatter(list, { formatViewList, formatViewItem })

  const rootRef = useRef<HTMLDivElement | null>(null)
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  function handleChange(_raw: ItemChangeArg) {
    let newValue: RawItem | RawItem[] | null = null
    if (multiple) {
      const multipleValue = (value as RawItem[] | undefined) || []
      if (!_raw.checked) {
        newValue = multipleValue.filter((valueItem) => valueItem?.id !== _raw.id)
      } else {
        newValue = [...multipleValue, _raw]
      }
    } else {
      if (!_raw.checked) {
        newValue = allowClear ? null : _raw
      } else {
        newValue = _raw
      }
    }
    onChange && onChange(newValue, { checkedItem: _raw })
  }

  function renderItem(item: ViewItem, index: number) {
    let checked = false
    if (value) {
      checked = multiple
        ? (value as RawItem[])?.findIndex?.((valueItem) => valueItem?.id === item?._raw?.id) >= 0
        : (value as RawItem)?.id === item?._raw?.id
    }

    if (typeof itemRender === 'function') {
      return itemRender(item, { index, checked, onChange: handleChange })
    }

    return (
      <Item
        key={String(item.id ?? item._raw?.id ?? index)}
        _raw={item._raw ?? { id: item.id ?? index }}
        checked={checked}
        disabled={item.disabled as boolean | undefined}
        checkable={checkable}
        style={{ ...itemStyle, ...(item.style as React.CSSProperties | undefined) }}
        className={itemClassName}
        layout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        imageUrl={item.imageUrl as string | undefined}
        imageRender={item.imageRender as ((item: RawItem & { checked?: boolean }) => React.ReactNode) | undefined}
        avatarUrl={item.avatarUrl as string | undefined}
        avatarRender={item.avatarRender as ((item: RawItem & { checked?: boolean }) => React.ReactNode) | undefined}
        title={(item.title ?? item.name) as React.ReactNode}
        description={item.description as React.ReactNode | undefined}
        note={item.note as React.ReactNode | undefined}
        content={item.content as React.ReactNode | undefined}
        actionRender={item.actionRender as ((item: RawItem & { checked?: boolean }) => React.ReactNode) | undefined}
        onSelect={handleChange}
      />
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-list', className)} ref={rootRef} style={style}>
      {Array.isArray(displayList) &&
        displayList.map((item, index) => {
          if (Array.isArray(item.children)) {
            return (
              <Fragment key={String(item.id ?? index)}>
                <HeaderItem
                  title={(item.title ?? item.name) as React.ReactNode}
                  anchor={item.anchor as string | undefined}
                  description={item.description as React.ReactNode | undefined}
                  style={item.style as React.CSSProperties | undefined}
                  className={item.className as string | undefined}
                />
                {item.children.map((option, optionIndex) => {
                  return renderItem(option, optionIndex)
                })}
              </Fragment>
            )
          }
          return renderItem(item, index)
        })}
    </div>
  )
}
export type { ListProps, ListRef } from './../types'

export default forwardRef<ListRef, ListProps>(List)
