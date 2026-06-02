import React, { useRef, useMemo, useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import constant from './constant'
import flattenList from './flattenList'
import getVisibleItems from './getVisibleItems'
import List from './List'

import type { ListProps, ListRef, ListItem } from './../../List/types'
import type { PageMainRef } from './../../Page/types'
import type { ListAsyncRef, ListAsyncProps } from './../types'
import type { ListAsyncVirtualListVirtualItem } from './ListAsync.VirtualList.types'

// 内库使用-start
import ObjectUtil from './../../../utils/ObjectUtil'
import Page from './../../Page'
// 内库使用-end

/* 测试使用-start
import { ObjectUtil, Page } from 'lyrixi-mobile'
测试使用-end */

// 列表
const VirtualList = (
  {
    // 子组件特定属性属性
    list,
    children,

    // Value & Display Value
    value,
    formatViewList,
    formatViewItem,

    // Status
    multiple,
    allowClear,
    checkable,
    virtual,
    threshold,
    touchStopPropagation,

    // Style
    safeArea,
    style,
    className,
    itemStyle,
    itemClassName,
    itemLayout,
    checkboxVariant,
    checkboxPosition,

    // Elements
    itemRender,
    prependRender,
    appendRender,

    // Events
    onChange,
    onScroll,
    onScrollEnd,
    onTopRefresh,
    onBottomRefresh
  }: ListAsyncProps,
  ref: React.Ref<ListAsyncRef>
) => {
  const rootRef = useRef<PageMainRef | null>(null)

  const listRef = useRef<HTMLDivElement | null>(null)

  // 拉平数据children, 并增加virtualData
  const items = useMemo(
    () => flattenList(list as ListItem[] | undefined) as ListAsyncVirtualListVirtualItem[],
    [list]
  )

  // 计算每一项的高度并缓存
  const itemHeights = useMemo(() => {
    if (Array.isArray(items) && items.length && virtual?.getItemHeight) {
      return items.map((item) => virtual.getItemHeight(item as ListItem))
    }
    return []
    // eslint-disable-next-line
  }, [list])

  // 计算总高度
  const totalHeight = itemHeights.reduce((sum, h) => sum + h, 0)

  // Visible Items and set virtualData style
  const [visibleItems, setVisibleItems] = useState<ListAsyncVirtualListVirtualItem[] | null>(null)

  // 初始化完成时更新显示容器
  useEffect(() => {
    if (Array.isArray(list) && list.length) {
      // 列表更新, 底部自定义区域超过一屏高度, 即使列表高度增加, 也会一直保持在底部, 需要滚动到列表可视区域, 避免一直底部刷新
      if (ObjectUtil.isEmpty(visibleItems) && totalHeight > constant.startBuffer) {
        const el = rootRef.current?.element
        const listEl = listRef.current
        if (el && listEl) {
          const appendHeight = el.scrollHeight - (listEl.offsetTop + listEl.offsetHeight)
          if (appendHeight > el.clientHeight) {
            el.scrollTop = el.scrollTop - appendHeight - constant.startBuffer
          }
        }
      }

      updateVisibleItems()
    } else {
      setVisibleItems(null)
    }
    // eslint-disable-next-line
  }, [list])

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current?.element ?? null,
      getElement: () => rootRef.current?.element ?? null,
      getAnchors: () => {
        if (!Array.isArray(items) || !items.length) {
          return []
        }
        const anchorsMap: Record<string, number> = {}
        const anchors: string[] = []
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          const anchor = item.anchor as string | undefined
          if (anchor) {
            if (!anchorsMap[anchor]) anchors.push(anchor)
            anchorsMap[anchor] = 1
          }
        }
        return anchors
      },
      scrollToAnchor: (anchor: string) => {
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          if (item.anchor === anchor) {
            if (typeof item?.virtualData.top === 'number' && rootRef.current?.element) {
              rootRef.current.element.scrollTop = item.virtualData.top
              return
            }
          }
        }
      }
    }
  })

  // 更新显示容器
  function updateVisibleItems() {
    if (!rootRef.current?.element) return
    const prependHeight = listRef.current?.offsetTop
    requestAnimationFrame(() => {
      const el = rootRef.current?.element
      const newVisibleItems = getVisibleItems({
        prependHeight: prependHeight || 0,
        items,
        itemHeights,
        scrollTop: el?.scrollTop,
        containerHeight: el?.clientHeight || 0
      })
      setVisibleItems(newVisibleItems)
    })
  }

  // 滚动
  function handleScroll(e: React.UIEvent<HTMLElement>) {
    updateVisibleItems()
    onScroll && onScroll(e)
  }

  return (
    <Page.Main
      ref={rootRef}
      threshold={threshold}
      touchStopPropagation={touchStopPropagation}
      safeArea={safeArea}
      style={style}
      className={className}
      onTopRefresh={onTopRefresh}
      onBottomRefresh={onBottomRefresh}
      onScroll={handleScroll}
      onScrollEnd={onScrollEnd}
    >
      {/* Elements: Prepend */}
      {typeof prependRender === 'function' ? prependRender({ list, value, onChange }) : null}

      {/* Elements: List */}
      <List
        ref={listRef as React.Ref<ListRef>}
        // Value & Display Value
        height={totalHeight}
        value={value}
        list={visibleItems as ListProps['list']}
        formatViewList={formatViewList}
        formatViewItem={formatViewItem}
        // Style
        itemStyle={itemStyle}
        itemClassName={itemClassName}
        itemLayout={itemLayout}
        checkboxVariant={checkboxVariant}
        checkboxPosition={checkboxPosition}
        // Status
        multiple={multiple}
        allowClear={allowClear}
        checkable={checkable}
        // Elements
        itemRender={itemRender}
        // Events
        onChange={onChange}
      />

      {/* Elements: Append */}
      {typeof appendRender === 'function' ? appendRender({ list, value, onChange }) : null}

      {/* Elements: Children */}
      {children}
    </Page.Main>
  )
}
export default forwardRef<ListAsyncRef, ListAsyncProps>(VirtualList)
