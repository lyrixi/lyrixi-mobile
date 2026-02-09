// 第三方库导入
import React, { useState } from 'react'
import { LocaleUtil, Page, ToolBar } from 'lyrixi-mobile'
// 样式图片等资源文件导入

const locale = LocaleUtil.locale

// 筛选栏
const Header = ({ queryParams, onSearch }) => {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <Page.Header>
      <ToolBar>
        {/* 搜索 */}
        {searchActive ? (
          <ToolBar.SearchActive
            placeholder={locale('按名称/拼音/拼音首字母查询')}
            allowClear
            value={queryParams?.keyword || ''}
            onSearch={(keyword) => {
              onSearch && onSearch({ ...queryParams, keyword: keyword })
              setSearchActive(false)
            }}
            onBlur={() => {
              setSearchActive(false)
            }}
          />
        ) : <ToolBar.Search
          placeholder={locale('按名称/拼音/拼音首字母查询')}
          value={queryParams?.keyword || ''}
          readOnly
          onClick={() => {
            setSearchActive(true)
          }}
        />}
      </ToolBar>
    </Page.Header>
  )
}

export default Header
