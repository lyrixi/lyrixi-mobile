import React, { type FC } from 'react'
import { LocaleUtil, ToolBar } from 'lyrixi-mobile'

import type { SearchBarProps } from './types'

const locale = LocaleUtil.locale

export type { SearchBarProps } from './types'

const SearchBar: FC<SearchBarProps> = ({ queryParams, onQuery }) => {
  return (
    <ToolBar>
      <ToolBar.Search
        placeholder={locale('按名称/拼音/拼音首字母查询')}
        value={String(queryParams?.keyword ?? '')}
        onChange={(value) => onQuery({ ...(queryParams ?? {}), keyword: value })}
      />
    </ToolBar>
  )
}

export default SearchBar
