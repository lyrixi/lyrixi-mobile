import React, { useState, useRef } from 'react'
// 第三方库导入
import { Page } from 'lyrixi-mobile'

// 公共组件导入

// 内部组件导入
import { queryData } from './../Common/api'
import Header from './../Common/Header'
import Main from './../Common/Main'

// 样式图片等资源文件导入
import './../Common/index.less'

// 虚拟滚动列表
const Virtual = () => {
  let [queryParams, setQueryParams] = useState(null)

  // Expose
  const mainRef = useRef(null)

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams) => {
          queryParams = newQueryParams
          setQueryParams(queryParams)
          mainRef.current.reload()
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        virtual={{
          getItemHeight: (item) => {
            if (item?.virtualData?.type === 'group') {
              return 33
            }
            return 71
          }
        }}
        loadData={async ({ previousResult, action }) => {
          console.log('action:', action)
          const result = await queryData(queryParams, {
            action: action
          })
          let newList = null
          if (result.status === 'success') {
            newList =
              action === 'bottomRefresh'
                ? previousResult.rankList.concat(result.rankList)
                : result.rankList
          }

          return {
            status: result.status,
            message: result.message,
            list: newList
          }
        }}
      />
    </Page>
  )
}

export default Virtual
