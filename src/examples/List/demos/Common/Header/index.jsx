// 第三方库导入
import React, { useState } from 'react'
import { LocaleUtil, Page, ToolBar } from 'lyrixi-mobile'
// 公共组件导入

// 内部组件导入
import Filter from './Filter'
// 样式图片等资源文件导入

const locale = LocaleUtil.locale

// 筛选栏
const Header = ({ queryParams, onSearch }) => {
  const [searchActive, setSearchActive] = useState(false)
  const [searchValue, setSearchValue] = useState(queryParams?.keyword || '')

  return (
    <Page.Header>
      <ToolBar>
        {/* 搜索 */}
        <ToolBar.Search
          placeholder={locale('按名称/拼音/拼音首字母查询')}
          value={queryParams?.keyword || ''}
          readOnly
          onClick={() => {
            setSearchActive(true)
          }}
        />
        {searchActive && (
          <ToolBar.SearchActive
            placeholder={locale('按名称/拼音/拼音首字母查询')}
            allowClear
            value={searchValue}
            onChange={(value) => {
              setSearchValue(value)
            }}
            onSearch={(keyword) => {
              onSearch && onSearch({ ...queryParams, keyword: keyword })
              setSearchActive(false)
            }}
            onCancel={() => {
              setSearchActive(false)
            }}
            onBlur={() => {
              setSearchActive(false)
            }}
          />
        )}
        {/* 筛选弹窗 */}
        <Filter queryParams={queryParams} onSearch={onSearch} />
      </ToolBar>
    </Page.Header>
  )
}

export default Header
