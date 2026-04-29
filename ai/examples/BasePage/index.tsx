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
    const newResult: QueryResult<Record<string, unknown>> = await queryData<
      Record<string, unknown>
    >(queryParams ?? {})
    setResult(newResult)
    Loading.hide()
  }

  useEffect(() => {
    void loadData()
  }, [queryParams])

  return (
    <Page>
      {/* Header组件插槽: start */}
      <Page.Header>
        {/* Header.SearchBar组件插槽: start */}
        <SearchBar queryParams={queryParams} onQuery={setQueryParams} />
        {/* Header.SearchBar组件插槽: end */}
      </Page.Header>
      {/* Header组件插槽: end */}

      <Page.Main>
        {/* Main组件插槽: start */}
        {result?.status === 'success' ? <Content data={result.data} /> : null}
        {/* Main组件插槽: end */}
        {/* Skeleton组件插槽: start */}
        {!result ? <Skeleton /> : null}
        {/* Skeleton组件插槽: end */}
      </Page.Main>

      <Page.Footer></Page.Footer>

      {/* 暂无数据或错误 */}
      {result?.status === 'error' ? <Result status="error" title={result.message} /> : null}
    </Page>
  )
}

export default BasePage
