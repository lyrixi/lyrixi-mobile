// 对应 DSL: ai/knowledge/dsl/base-page.json → ai/knowledge/examples/BasePage
import React, { useEffect, useState, type FC } from 'react'
import { Page, Result, Skeleton, Loading } from 'lyrixi-mobile'

import { queryData } from './api'
import { type QueryResult } from './types'
import SearchBar from './SearchBar'
import Content from './Content'

// 页面名称: types业务侧根据各自的业务自行修改
const BasePage: FC = () => {
  const [queryParams, setQueryParams] = useState<Record<string, unknown> | null>(null)
  const [result, setResult] = useState<QueryResult<Record<string, unknown>> | null>(null)

  async function loadData(): Promise<void> {
    Loading.show()
    const next: QueryResult<Record<string, unknown>> = await queryData<Record<string, unknown>>(
      queryParams ?? {}
    )
    setResult(next)
    Loading.hide()
  }

  useEffect(() => {
    void loadData()
  }, [queryParams])

  return (
    <Page>
      <Page.Header>
        {/* 搜索栏 */}
        <SearchBar queryParams={queryParams} onQuery={setQueryParams} />
      </Page.Header>

      <Page.Main>
        {/* 主体内容 */}
        {result?.status === 'success' ? <Content data={result.data} /> : null}
        {/* 加载中 */}
        {!result ? <Skeleton /> : null}
      </Page.Main>

      <Page.Footer></Page.Footer>

      {/* 暂无数据或错误 */}
      {result?.status === 'error' ? <Result status="error" title={result.message} /> : null}
    </Page>
  )
}

export default BasePage
