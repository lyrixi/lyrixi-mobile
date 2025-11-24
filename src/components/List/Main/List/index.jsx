import React, { forwardRef } from 'react'
import List from './../../List'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Page from './../../../Page'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, Page } from 'lyrixi-mobile'
测试使用-end */

// 列表
const Main = forwardRef(
  (
    {
      // Value & Display Value
      value,
      list,

      // Status
      virtual,
      multiple,
      allowClear,
      checkable,

      // Style
      className,
      style,

      // Elements
      itemRender,
      itemLayout,
      prependRender,
      appendRender,
      children,

      // Events
      onChange,
      onScroll,
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
      >
        {/* Elements: Prepend */}
        {typeof prependRender === 'function' ? prependRender({ list, value, onChange }) : null}

        {/* Elements: List */}
        {Array.isArray(list) && list.length ? (
          <List
            // Value & Display Value
            value={value}
            list={list}
            // Status
            multiple={multiple}
            allowClear={allowClear}
            checkable={checkable}
            // Elements
            itemRender={itemRender}
            itemLayout={itemLayout}
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
