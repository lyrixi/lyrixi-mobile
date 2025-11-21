// 第三方库导入
import React, { useState } from 'react'
import { Page, List, Button } from 'lyrixi-mobile'

// 项目内部模块导入
// 内部组件函数导入
import serverParams from './api/queryData/serverParams'
import formatResult from './api/queryData/formatResult'
import formatItem from './api/queryData/formatItem'

// 简便的列表组件, 只需要传入url和params即可
const MainUrlDemo = () => {
  // 查询参数
  let [queryParams, setQueryParams] = useState({ query: '1' })

  // 切换日期类型
  const toggleParams = () => {
    setQueryParams(queryParams.query === '1' ? { query: '2' } : { query: '1' })
  }

  return (
    <Page className="full">
      {/* 头部 */}
      <Page.Header>
        <Button onClick={toggleParams}>Toggle params</Button>
      </Page.Header>

      {/* 列表 */}
      <List.MainUrl
        url="/url/xxx"
        params={serverParams(queryParams)}
        onLoad={(result) => {
          let listResult = formatResult(result)
          return listResult
        }}
        formatItem={(item) => {
          return formatItem(item)
        }}
      />
    </Page>
  )
}

export default MainUrlDemo
