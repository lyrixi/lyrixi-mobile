// 第三方库导入
import React, { useState } from 'react'
import { Layout, Button } from 'seedsui-react'

// 项目内部模块导入
import List from 'library/components/ListV2'
// import MainUrl from './../../MainUrl'
// 内部组件函数导入
import serverData from './serverData'
import localData from './localData'
import formatItem from './formatItem'

// 简便的列表组件, 只需要传入url和params即可
const MainUrlDemo = () => {
  // 查询参数
  let [queryParams, setQueryParams] = useState('1')

  // 切换日期类型
  const toggleParams = () => {
    setQueryParams('1' ? '2' : '1')
  }

  return (
    <Layout className="full">
      {/* 头部 */}
      <Layout.Header>
        <Button onClick={toggleParams}>Toggle params</Button>
      </Layout.Header>

      {/* 列表 */}
      <List.UrlMain
        ref={mainRef}
        url="/app/mbo/mobile/report/user/detail/getRank.do"
        params={serverData({ dateType, rankType, sortType })}
        onLoad={(result) => {
          let listResult = localData(result)
          return listResult
        }}
        formatItem={(item) => {
          return formatItem(item, rankType)
        }}
      />
    </Layout>
  )
}

export default MainUrlDemo
