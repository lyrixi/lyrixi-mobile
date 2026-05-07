import React, { useState, type ComponentProps } from 'react'
import SearchPage from './SearchPage'

// 内库使用-start
import Page from './../../../Page'
import ToolBar from './../../../ToolBar'
import SearchBar from './../../../ToolBar/Search'
// 内库使用-end

/* 测试使用-start
import { Page, ToolBar } from 'lyrixi-mobile'
测试使用-end */

import type { CascaderNode } from './../../types'

type SearchBarFieldProps = ComponentProps<typeof SearchBar>

// 搜索
function SearchControl({
  list,
  onSearch,
  onChange
}: {
  list: CascaderNode[]
  onSearch?: (keyword: string, ctx: { list: CascaderNode[] }) => void
  onChange?: (v: CascaderNode[]) => void
}) {
  // 搜索结果页面显隐
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Element: Search Bar */}
      <Page.Header className="lyrixi-cascader-search-header">
        <ToolBar variant="filled">
          <SearchBar
            {...({
              readOnly: true,
              onClick: () => {
                setOpen(!open)
              }
            } as unknown as SearchBarFieldProps)}
          />
        </ToolBar>
      </Page.Header>

      {/* Element: Search Page */}
      {open && <SearchPage
        // Element
        list={list}
        // Events
        onSearch={onSearch}
        onClose={() => setOpen(false)}
        onChange={(newValue) => {
          onChange?.(newValue)
          setOpen(false)
        }}
      />}
    </>
  )
}
export default SearchControl
