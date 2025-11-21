// 第三方库导入
import React from 'react'
import { List } from 'lyrixi-mobile'

// 项目内部模块导入
// 内部组件函数导入
import serverParams from './/serverParams'
import formatResult from './/formatResult'
import formatItem from './/formatItem'

// 简便的列表组件, 只需要传入url和params即可
const Main = ({ cacheName, queryParams }) => {
  return (
    <List.MainUrl
      cacheName={cacheName}
      url="/"
      params={serverParams(queryParams)}
      onLoad={(result) => {
        let listResult = formatResult(result)
        return listResult
      }}
      formatItem={(item) => {
        return formatItem(item)
      }}
    />
  )
}

export default Main
