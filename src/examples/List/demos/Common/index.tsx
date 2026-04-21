import React, { useState } from 'react'
import { Page } from 'lyrixi-mobile'

import Header from './Header'
import Main from './Main'

// 简便的列表组件, 只需要传入url和params即可
const Common = () => {
  // 查询参数
  const [queryParams, setQueryParams] = useState({ keyword: '1' })

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          setQueryParams(newQueryParams)
        }}
      />

      {/* 列表 */}
      <Main queryParams={queryParams} />
    </Page>
  )
}

export default Common
