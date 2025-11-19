import React, { useRef, useMemo, useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import _ from 'lodash'
import constant from './constant'
import flattenList from './flattenList'
import getVisibleItems from './getVisibleItems'
import List from './List'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Page from './../../../Page'
// 内库使用-end

/* 测试使用-start
import { Page } from 'lyrixi-mobile'
测试使用-end */

// 列表
const VirtualList = (
  {
    // value & display value
    list,
    virtual,

    // Page: Status
    threshold = 50,
    safeArea,
    touchStopPropagation = true,

    // Page: Style
    className,
    style,

    // Page: Element
    children,

    // Page: Events
    onTopRefresh,
    onBottomRefresh,
    onScroll,

    // List: Value & Display Value
    value,

    // List: Status
    allowClear,
    multiple,

    // List: Element
    prependRender,
    appendRender,
    itemRender,
    itemLayout,
    checkable,

    // List: Events
    onChange
  },
  ref
) => {
  const rootRef = useRef(null)
  const listRef = useRef(null)

  // 拉平数据, And set virtualData.type
  const items = useMemo(() => flattenList(list), [list])

  // 计算每一项的高度并缓存
  const itemHeights = useMemo(() => {
    if (Array.isArray(items) && items.length) {
      return items.map(virtual.getItemHeight)
    }
    return []
    // eslint-disable-next-line
  }, [list])

  // 计算总高度
  const totalHeight = itemHeights.reduce((sum, h) => sum + h, 0)

  // Visible Items and set virtualData style
  const [visibleItems, setVisibleItems] = useState(null)

  // Expose
  useImperativeHandle(ref, () => {
    return {
      ...rootRef.current,
      getAnchors: () => {
        if (!Array.isArray(items) || !items.length) {
          return []
        }
        let anchorsMap = {}
        let anchors = []
        for (let item of items) {
          if (item.anchor) {
            if (!anchorsMap[item.anchor]) anchors.push(item.anchor)
            anchorsMap[item.anchor] = 1
          }
        }
        return anchors
      },
      scrollToAnchor: (anchor) => {
        for (let item of items) {
          if (item.anchor === anchor) {
            if (typeof item?.virtualData.top === 'number') {
              rootRef.current.rootDOM.scrollTop = item?.virtualData.top
              return
            }
          }
        }
      }
    }
  })

  // 初始化完成时更新显示容器
  useEffect(() => {
    if (Array.isArray(list) && list.length) {
      // 列表更新, 底部自定义区域超过一屏高度, 即使列表高度增加, 也会一直保持在底部, 需要滚动到列表可视区域, 避免一直底部刷新
      if (_.isEmpty(visibleItems) && totalHeight > constant.startBuffer) {
        let appendHeight =
          rootRef.current.rootDOM.scrollHeight -
          (listRef.current.offsetTop + listRef.current.offsetHeight)
        if (appendHeight > rootRef.current?.rootDOM.clientHeight) {
          rootRef.current.rootDOM.scrollTop =
            rootRef.current.rootDOM.scrollTop - appendHeight - constant.startBuffer
        }
      }

      // 更新显示容器
      updateVisibleItems()
    } else {
      setVisibleItems(null)
    }
    // eslint-disable-next-line
  }, [list])

  // 更新显示容器
  function updateVisibleItems() {
    if (!rootRef.current?.rootDOM) return
    let prependHeight = listRef.current?.offsetTop
    requestAnimationFrame(() => {
      let newVisibleItems = getVisibleItems({
        prependHeight: prependHeight || 0,
        items,
        itemHeights,
        scrollTop: rootRef.current?.rootDOM?.scrollTop,
        containerHeight: rootRef.current?.rootDOM?.clientHeight || 0
      })
      setVisibleItems(newVisibleItems)
    })
  }

  // 滚动
  function handleScroll(e) {
    // Set visible items and set virtualData
    updateVisibleItems()
    onScroll && onScroll(e)
  }

  return (
    <Page.Main
      ref={rootRef}
      // Page: Status
      threshold={threshold}
      safeArea={safeArea}
      touchStopPropagation={touchStopPropagation}
      // Page: Style
      style={style}
      className={DOMUtil.classNames('lyrixi-list-main', className)}
      // Page: Events
      onTopRefresh={onTopRefresh}
      onBottomRefresh={onBottomRefresh}
      onScroll={handleScroll}
    >
      {/* Element: Prepend */}
      {typeof prependRender === 'function' ? prependRender({ list, value, onChange }) : null}

      {/* Element: List */}
      <List
        ref={listRef}
        // List: Value & Display Value
        value={value}
        list={visibleItems}
        // List: Status
        allowClear={allowClear}
        multiple={multiple}
        // List: Element
        itemRender={itemRender}
        itemLayout={itemLayout}
        checkable={checkable}
        height={totalHeight}
        // List: Events
        onChange={onChange}
      />

      {/* Element: Append */}
      {typeof appendRender === 'function' ? appendRender({ list, value, onChange }) : null}

      {/* Page: Element: Children */}
      {children}
    </Page.Main>
  )
}

export default forwardRef(VirtualList)
