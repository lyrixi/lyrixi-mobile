import React, { Fragment, forwardRef, useRef, useImperativeHandle } from 'react'
import viewFormatter from './viewFormatter'
import getSpaceDates from './getSpaceDates'
import Item from './../Item'

import type { ChatItemProps, ChatListProps, ChatListRef, ChatListValue, ChatViewItem } from './../types'

// 内库使用-start
import DateUtil from './../../../utils/DateUtil'
// 内库使用-end

/* 测试使用-start
import { DateUtil } from 'lyrixi-mobile'
测试使用-end */

const List = (
  {
    value,
    list,
    formatViewList,
    formatViewItem,
    checkable,
    checkboxVariant,
    checkboxPosition,
    timeSpace = 60000,
    onChange
  }: ChatListProps,
  ref: React.ForwardedRef<ChatListRef>
) => {
  let displayList = viewFormatter(list, { formatViewList, formatViewItem })

  const rootRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => {
        return rootRef.current
      }
    }
  })

  function renderItem(item: ChatViewItem, index: number) {
    return (
      <Item
        key={String(item.id ?? item._raw?.id ?? index)}
        _raw={(item._raw ?? { id: item.id ?? index }) as Record<string, unknown>}
        checkable={checkable}
        checked={(value?.findIndex?.((valueItem) => valueItem?.id === item.id) ?? -1) >= 0}
        position={item.position}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        avatarUrl={item.avatarUrl}
        avatarRender={item.avatarRender as ChatItemProps['avatarRender']}
        avatarNode={item.avatarNode as React.ReactNode}
        authorRender={item.authorRender as ChatItemProps['authorRender']}
        authorNode={(item.authorNode ?? item.name) as React.ReactNode}
        content={item.content as React.ReactNode}
        onChange={(checked) => {
          let newValue: ChatListValue[] = []
          if (!checked) {
            newValue = (value ?? []).filter((valueItem) => valueItem?.id !== item.id)
          } else {
            newValue = [...(value ?? []), item]
          }
          if (onChange) onChange(newValue)
        }}
      />
    )
  }

  let dates: Date[] = []

  return (
    <div className="lyrixi-chat-list" ref={rootRef}>
      {displayList?.map?.((item, index) => {
        let bar: React.ReactNode = null
        if (item.time) {
          const spaceDates = getSpaceDates(item.time, dates, timeSpace)
          dates = spaceDates.dates
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
            {renderItem(item, index)}
          </Fragment>
        )
      })}
    </div>
  )
}

export default forwardRef<ChatListRef, ChatListProps>(List)
