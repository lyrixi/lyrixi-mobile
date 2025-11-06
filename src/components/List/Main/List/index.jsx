import React, { forwardRef } from 'react'
import List from './../../List'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
import Page from './../../../Page'
// 内库使用-end

/* 测试使用-start
import { Page } from 'lyrixi-mobile'
测试使用-end */

// 列表
const Main = forwardRef(
  (
    {
      virtual,
      // Request
      onTopRefresh,
      onBottomRefresh,

      // Main: common
      allowClear,
      multiple,
      value,
      onChange,
      onScroll,

      // List config
      itemRender,
      itemLayout,
      checkable,

      // Render
      prepend,
      list,
      append,

      children,
      ...props
    },
    ref
  ) => {
    return (
      <Page.Main
        {...props}
        ref={ref}
        className={DOMUtil.classNames('lyrixi-list-main', props.className)}
        onTopRefresh={onTopRefresh}
        onBottomRefresh={onBottomRefresh}
        onScroll={onScroll}
      >
        {/* 头部 */}
        {typeof prepend === 'function' ? prepend({ list, value, onChange }) : null}

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
        {typeof append === 'function' ? append({ list, value, onChange }) : null}

        {/* 其它公共的提示信息 */}
        {children}
      </Page.Main>
    )
  }
)

export default Main
