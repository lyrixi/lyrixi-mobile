// 对应 DSL: ai/knowledge/dsl/components/init-page.json
import React, { useRef, useEffect, useState, type FC } from 'react'
import { LocaleUtil, Page, Result, Toast } from 'lyrixi-mobile'

import { queryData, approveData } from './api'
import {
  type ApproveDataResult,
  type BasePageQueryDataResult,
  isBasePageQueryError,
  isBasePageQuerySuccess
} from './types'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const locale = LocaleUtil.locale

const BasePage: FC = () => {
  const tokenRef = useRef<string>(String(Date.now()))

  const [result, setResult] = useState<BasePageQueryDataResult | null>(null)

  async function loadData(): Promise<void> {
    const next: BasePageQueryDataResult = await queryData()
    setResult(next)
  }

  useEffect(() => {
    void loadData()
  }, [])

  async function handleApprove(): Promise<void> {
    const res: ApproveDataResult = await approveData({ token: tokenRef.current })
    if (res.code === '1') {
      Toast.show({
        content: locale('审批通过!'),
        onClose: () => undefined
      })
    } else if (res.code === '2') {
      Toast.show({
        content: res.message ?? locale('请勿重复提交!'),
        onClose: () => undefined
      })
    } else {
      tokenRef.current = String(Date.now())
      Toast.show({
        content: res.message ?? locale('审批失败!')
      })
    }
  }

  return (
    <Page>
      <Header />

      {result !== null && isBasePageQuerySuccess(result) ? <Main data={result.data} /> : null}

      <Footer onOk={handleApprove} />

      {result !== null && isBasePageQueryError(result) ? (
        <Result status={result.status} title={result.message} />
      ) : null}
    </Page>
  )
}

export default BasePage
