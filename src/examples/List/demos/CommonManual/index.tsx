import React, { useState, useRef } from 'react'
// 第三方库导入
import { Page } from 'lyrixi-mobile'
import type { ListAsyncRef, LoadResult } from '../../../../components/ListAsync'

// 公共组件导入

// 内部组件导入
import { queryData } from './api'
import Header from './Header'
import Main from './Main'

// 样式图片等资源文件导入
import './index.less'

// 普通列表
const Common = () => {
  const mainRef = useRef<ListAsyncRef | null>(null)
  const [queryParams, setQueryParams] = useState<Record<string, unknown>>({})

  return (
    <Page>
      {/* 搜索栏 */}
      <Header
        queryParams={queryParams}
        onSearch={(newQueryParams: Record<string, unknown>) => {
          setQueryParams(newQueryParams)
          mainRef.current?.reload('reload')
        }}
      />

      {/* 列表 */}
      <Main
        ref={mainRef}
        loadData={async ({ previousResult, action }) => {
          console.log('action:', action)
          const result = (await queryData(queryParams, {
            action: action
          })) as {
            status: string
            message?: string
            data?: { list: unknown[] }
          }
          let newList: unknown[] | null = null
          if (result.status !== 'error' && result.data?.list) {
            const prev = (previousResult?.list ?? []) as unknown[]
            newList =
              action === 'bottomRefresh' ? prev.concat(result.data.list) : result.data.list
          }

          return {
            status: result.status,
            message: result.message,
            list: newList ?? undefined
          } as LoadResult
        }}
        onChange={() => {
          console.log('onChange')
        }}
      />
    </Page>
  )
}

export default Common
