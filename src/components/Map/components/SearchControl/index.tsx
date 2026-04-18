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
    // Element
    map,

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
      <ToolBar.Search
        ref={ref}
        // Status
        readOnly
        // Style
        className="lyrixi-map-searchControl-navigation"
        // Events
        onClick={() => {
          setOpen(!open)
        }}
      />

      {/* Element: Search Page */}
      <Page
        // Status
        open={open}
        // Element
        map={map}
        // Events
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={onChange}
      />
    </>
  )
}
export default forwardRef(SearchControl)
