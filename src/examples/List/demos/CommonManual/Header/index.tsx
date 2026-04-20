import React, { useState } from 'react'
import { LocaleUtil, Page, ToolBar } from 'lyrixi-mobile'

import Filter from './Filter'

const locale = LocaleUtil.locale

// 筛选栏
const Header = ({ queryParams, onSearch }) => {
  const [searchActive, setSearchActive] = useState(false)

  const handleSearchBarClick = () => {
    setSearchActive(true)
  }

  const handleSearch = (keyword: string) => {
    onSearch?.({ ...queryParams, keyword: keyword })
    setSearchActive(false)
  }

  const handleSearchBlur = () => {
    setSearchActive(false)
  }

  return (
    <Page.Header>
      <ToolBar>
        {/* 搜索 */}
        <ToolBar.Search
          placeholder={locale('按名称/拼音/拼音首字母查询')}
          value={queryParams?.keyword || ''}
          readOnly
          onClick={handleSearchBarClick}
        />
        {searchActive && (
          <ToolBar.SearchActive
            placeholder={locale('按名称/拼音/拼音首字母查询')}
            allowClear
            value={queryParams?.keyword || ''}
            onSearch={handleSearch}
            onBlur={handleSearchBlur}
          />
        )}
        {/* 筛选弹窗 */}
        <Filter queryParams={queryParams} onSearch={onSearch} />
      </ToolBar>
    </Page.Header>
  )
}

export default Header
