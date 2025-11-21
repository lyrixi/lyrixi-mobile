// 第三方库导入
import React, { useState } from 'react'
import { Page } from 'lyrixi-mobile'

// 项目内部模块导入

// 内部组件函数导入
import Header from './Header'
import Main from './Main'

// 简便的列表组件, 只需要传入url和params即可
const Common = () => {
  // 查询参数
  let [queryParams, setQueryParams] = useState({ query: '1' })

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          queryParams = newQueryParams
          setQueryParams(newQueryParams)
        }}
      />

      {/* 列表 */}
      <Main params={queryParams} />
    </Page>
  )
}

export default Common
