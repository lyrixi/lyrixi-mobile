import React, { type FC } from 'react'
import { LocaleUtil, ToolBar } from 'lyrixi-mobile'

const locale = LocaleUtil.locale

const Header: FC<Record<string, unknown>> = ({ queryParams, onQuery }) => {
  return (
    <ToolBar>
      <ToolBar.Search
        placeholder={locale('按名称/拼音/拼音首字母查询')}
        value={queryParams?.keyword || ''}
        onChange={(value) => onQuery?.({ ...queryParams, keyword: value })}
      />
    </ToolBar>
  )
}

export default Header
