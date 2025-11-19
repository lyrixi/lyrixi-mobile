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
        style={style}
        ref={ref}
        className={DOMUtil.classNames('lyrixi-list-main', className)}
        onTopRefresh={onTopRefresh}
        onBottomRefresh={onBottomRefresh}
        onScroll={onScroll}
      >
        {/* 头部 */}
        {typeof prependRender === 'function' ? prependRender({ list, value, onChange }) : null}

        {/* 列表 */}
        {Array.isArray(list) && list.length ? (
          <List
            allowClear={allowClear}
            multiple={multiple}
            value={value}
            list={list}
            onChange={onChange}
            // List config
            itemRender={itemRender}
            itemLayout={itemLayout}
            checkable={checkable}
          />
        ) : null}

        {/* 底部 */}
        {typeof appendRender === 'function' ? appendRender({ list, value, onChange }) : null}

        {/* 其它公共的提示信息 */}
        {children}
      </Page.Main>
    )
  }
)

export default Main
