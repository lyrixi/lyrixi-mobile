import React, { useState } from 'react'
import SearchPage from './SearchPage'

// 内库使用-start
import Page from './../../../Page'
import ToolBar from './../../../ToolBar'
// 内库使用-end

/* 测试使用-start
import { Page, ToolBar } from 'lyrixi-mobile'
测试使用-end */

// 搜索
function SearchControl({
  // Value & Display Value
  list,

  // Events
  onChange
}) {
  // 搜索结果页面显隐
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Element: Search Bar */}
      <Page.Header className="lyrixi-cascader-search-header">
        <ToolBar.Search
          // Status
          readOnly
          // Events
          onClick={() => {
            setOpen(!open)
          }}
        />
      </Page.Header>

      {/* Element: Search Page */}
      <SearchPage
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
export default SearchControl
