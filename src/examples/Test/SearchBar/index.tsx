import React, { type FC } from 'react'
import { LocaleUtil, ToolBar } from 'lyrixi-mobile'

const locale = LocaleUtil.locale

type SearchBarProps = {
  queryParams: Record<string, unknown> | null
  onQuery: (p: Record<string, unknown>) => void
}

const SearchBar: FC<SearchBarProps> = ({ queryParams, onQuery }) => {
  return (
    <ToolBar>
      <ToolBar.Search
        placeholder={locale('按名称/拼音/拼音首字母查询')}
        value={typeof queryParams?.keyword === 'string' ? queryParams.keyword : ''}
        onChange={(value) => onQuery({ ...queryParams, keyword: value })}
      />
    </ToolBar>
  )
}

export default SearchBar
