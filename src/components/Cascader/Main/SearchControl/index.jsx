import React, { forwardRef, useState } from 'react'
import Page from './Page'

// 内库使用-start
import ToolBar from './../../../ToolBar'
// 内库使用-end

/* 测试使用-start
import { ToolBar } from 'lyrixi-mobile'
测试使用-end */

// 搜索
function SearchControl(
  {
    // Value & Display Value
    list,

    // Events
    onChange
  },
  ref
) {
  // 搜索结果页面显隐
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Element: Search Bar */}
      <Page.Header className="lyrixi-cascader-search-header">
        <ToolBar.Search
          ref={ref}
          // Status
          readOnly
          // Events
          onClick={() => {
            setOpen(!open)
          }}
        />
      </Page.Header>

      {/* Element: Search Page */}
      <Page
        // Status
        open={open}
        // Element
        list={list}
        // Events
        onClose={() => setOpen(false)}
        onChange={onChange}
      />
    </>
  )
}
export default forwardRef(SearchControl)
