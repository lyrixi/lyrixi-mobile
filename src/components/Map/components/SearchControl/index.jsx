import React, { forwardRef, useState } from 'react'
import Page from './Page'

// 内库使用-start
import ToolBar from './../../../ToolBar'
// 内库使用-end

/* 测试使用-start
import { ToolBar } from 'lyrixi-mobile'
测试使用-end */

// 搜索
function SearchControl({ map, onChange }, ref) {
  // 搜索结果页面显隐
  const [open, setOpen] = useState(false)

  return (
    <>
      <ToolBar.Search
        ref={ref}
        className="lyrixi-map-searchControl-navigation"
        // value={search}
        readOnly
        onClick={() => {
          setOpen(!open)
        }}
      />

      <Page
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        map={map}
        onChange={onChange}
      />
    </>
  )
}
export default forwardRef(SearchControl)
