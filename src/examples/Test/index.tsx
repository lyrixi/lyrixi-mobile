import React, { useEffect, useState } from 'react'

import { Page, Result } from 'lyrixi-mobile'

import { queryData } from './api'
import type { TestQueryResultView } from './types'

const Test = () => {
  const [result, setResult] = useState<unknown>(null)

  useEffect(() => {
    loadData()

    // eslint-disable-next-line
  }, [])

  async function loadData() {
    const newResult = await queryData()
    setResult(newResult)
  }

  const resData = result as TestQueryResultView

  return (
    <Page>
      {resData?.data && <Page.Main />}

      {resData?.status && <Result status={resData.status} title={resData.message} />}
    </Page>
  )
}

export default Test
