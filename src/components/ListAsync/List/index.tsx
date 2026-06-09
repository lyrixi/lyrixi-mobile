import React, { forwardRef } from 'react'
import List from './List'

import type { ListAsyncRef, ListAsyncProps } from './../types'

// 内库使用-start
import Page from './../../Page'
// 内库使用-end

/* 测试使用-start
import { Page } from 'lyrixi-mobile'
测试使用-end */

// 列表
const EntityList = forwardRef<ListAsyncRef, ListAsyncProps>(
  (
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    },
    ref
  ) => {
    return (
      <Page.Main
        ref={ref}
        // Status
        threshold={threshold}
        touchStopPropagation={touchStopPropagation}
        // Style
        safeArea={safeArea}
        className={className}
        style={style}
        // Events
        onTopRefresh={onTopRefresh}
        onBottomRefresh={onBottomRefresh}
        onScroll={onScroll}
        onScrollEnd={onScrollEnd}
      >
        {/* Elements: Prepend */}
        {typeof prependRender === 'function' ? prependRender({ list, value, onChange }) : null}

        {/* Elements: List */}
        {Array.isArray(list) && list.length ? (
          <List
            // Value & Display Value
            value={value}
            list={list}
            formatViewList={formatViewList}
            formatViewItem={formatViewItem}
            // Status
            multiple={multiple}
            allowClear={allowClear}
            checkable={checkable}
            // Style
            itemStyle={itemStyle}
            itemClassName={itemClassName}
            itemLayout={itemLayout}
            checkboxVariant={checkboxVariant}
            checkboxPosition={checkboxPosition}
            // Elements
            itemRender={itemRender}
            // Events
            onChange={onChange}
          />
        ) : null}

        {/* Elements: Append */}
        {typeof appendRender === 'function' ? appendRender({ list, value, onChange }) : null}

        {/* Elements: Children */}
        {children}
      </Page.Main>
    )
  }
)
export default EntityList
