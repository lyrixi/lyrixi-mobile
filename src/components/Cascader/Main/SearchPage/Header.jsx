import React from 'react'

// 内库使用-start
import Page from './../../../Page'
import ToolBar from './../../../ToolBar'
// 内库使用-end

/* 测试使用-start
import { Page, ToolBar } from 'lyrixi-mobile'
测试使用-end */

// 搜索框组件
export default function SearchHeader({
  searchActive,
  setSearchActive,
  value,
  onChange,
  onClick,
  onCancel
}) {
  return (
    <Page.Header className="lyrixi-cascader-search-header">
      <ToolBar variant="filled">
        <ToolBar.Search
          value={value}
          readOnly
          allowClear
          onClick={() => {
            setSearchActive(true)
            onClick && onClick()
          }}
        />
        {searchActive && (
          <ToolBar.SearchActive
            value={value}
            allowClear
            onChange={onChange}
            onCancel={() => {
              onCancel && onCancel()
              setSearchActive(false)
            }}
          />
        )}
      </ToolBar>
    </Page.Header>
  )
}
