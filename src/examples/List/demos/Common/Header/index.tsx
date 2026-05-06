import React, { useState } from 'react'
import { LocaleUtil, Page, ToolBar } from 'lyrixi-mobile'
import SearchBar from '../../../../../components/ToolBar/Search'
import SearchActive from '../../../../../components/ToolBar/SearchActive'

import Filter from './Filter'
import type { HeaderProps, SearchActiveProps, SearchBarProps } from './types'

const locale = LocaleUtil.locale

// 筛选栏
const Header = ({ queryParams, onSearch }: HeaderProps) => {
  const [searchActive, setSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState(queryParams?.keyword || '')

  const handleSearchBarClick = () => {
    setSearchActive(true)
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
  }

  const handleSearch = (keyword: string) => {
    onSearch?.({ ...queryParams, keyword: keyword })
    setSearchActive(false)
  }

  const handleSearchCancel = () => {
    setSearchActive(false)
  }

  const handleSearchBlur = () => {
    setSearchActive(false)
  }

  return (
    <Page.Header>
      <ToolBar>
        {/* 搜索 — ToolBar subcomponents are structurally untyped; narrow at call site */}
        <SearchBar
          {...({
            placeholder: String(locale('按名称/拼音/拼音首字母查询')),
            value: String(queryParams?.keyword ?? ''),
            readOnly: true,
            onClick: handleSearchBarClick
          } as unknown as SearchBarProps)}
        />
        {searchActive && (
          <SearchActive
            {...({
              placeholder: String(locale('按名称/拼音/拼音首字母查询')),
              allowClear: true,
              value: searchValue,
              onChange: handleSearchChange,
              onSearch: handleSearch,
              onCancel: handleSearchCancel,
              onBlur: handleSearchBlur
            } as unknown as SearchActiveProps)}
          />
        )}
        {/* 筛选弹窗 */}
        <Filter queryParams={queryParams} onSearch={onSearch} />
      </ToolBar>
    </Page.Header>
  )
}

export default Header
