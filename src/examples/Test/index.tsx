// 对应 DSL: ai/knowledge/dsl/base-page.json → src/examples/Test
import React, { useEffect, useState, type FC } from 'react'
import { Page, Result } from 'lyrixi-mobile'

import { queryData } from './api'
import { type QueryResult } from './types'
import SearchBar from './SearchBar'

const TestPage: FC = () => {
  const [queryParams, setQueryParams] = useState<Record<string, unknown> | null>(null)
  const [result, setResult] = useState<QueryResult<Record<string, unknown>[]> | null>(null)

  async function loadData(): Promise<void> {
    const newResult = await queryData<Record<string, unknown>>(queryParams ?? {})
    setResult(newResult)
  }

  useEffect(() => {
    void loadData()
  }, [queryParams])

  return (
    <Page>
      <Page.Header>
        <SearchBar queryParams={queryParams} onQuery={setQueryParams} />
      </Page.Header>

      <Page.Main></Page.Main>

      {result?.status === 'error' ? <Result status="error" title={result.message} /> : null}
      {result?.status === 'empty' ? <Result status="empty" title={result.message} /> : null}
    </Page>
  )
}

export default TestPage
