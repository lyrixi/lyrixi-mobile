import React, { forwardRef } from 'react'

// 内库使用-start
import Page from './../../Page'
import List from './../../List'
// 内库使用-end

/* 测试使用-start
import { Page, List } from 'lyrixi-mobile'
测试使用-end */

// 列表
const Main = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,
      formatViewList,
      formatViewItem,

      // Status
      virtual,
      multiple,
      allowClear,
      checkable,

      // Style
      className,
      style,
      itemStyle,
      itemClassName,
      itemLayout,
      checkboxVariant,
      checkboxPosition,

      // Elements
      itemRender,
      prependRender,
      appendRender,
      children,

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
        // Style
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

export default Main
