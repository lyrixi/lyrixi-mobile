import React, { useState } from 'react'
import { LocaleUtil, ToolBar } from 'lyrixi-mobile'
const locale = LocaleUtil.locale

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('')

  return (
    <ToolBar>
      <ToolBar.Search
        placeholder={locale('请输入关键字')}
        value={searchText}
        allowClear
        onChange={setSearchText}
        onSearch={() => {
          onSearch && onSearch(searchText)
        }}
      />
    </ToolBar>
  )
}

export default Header
