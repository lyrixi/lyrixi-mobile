import React from 'react'

import { Page, LocaleUtil, Divider, Card, DateUtil } from 'lyrixi-mobile'
import dayjs from 'dayjs'

// 中文
// import 'dayjs/locale/zh-cn'
// import zhCN from 'lyrixi-mobile/locale/zh_CN.json'
// dayjs.locale('zh-cn')
// LocaleUtil.setLocale('zh_CN', zhCN)

// 英文
import 'dayjs/locale/zh-cn'
import enUS from 'lyrixi-mobile/locale/en_US.json'
dayjs.locale('en')
LocaleUtil.setLocale('en_US', enUS)

export default () => {
  return (
    <Page className="lyrixi-full">
      <Page.Main>
        <Divider>Node</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale('近7日', 'lyrixi_last_days', [
            <span key={'0'} style={{ color: 'red' }}>
              7
            </span>
          ])}
        </Card>

        <Divider>String</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          <div>variable:</div>
          {LocaleUtil.locale('近x日', 'lyrixi_last_days', ['7'])}
        </Card>

        <Divider>No locale data</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale('近{0}日', '', ['7'])}
        </Card>

        <Divider>Remark Node</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>
          {LocaleUtil.locale(<div>Node</div>)}
        </Card>

        <Divider>Remark Number</Divider>
        <Card style={{ padding: 'var(--lyrixi-space-l)' }}>{LocaleUtil.locale(7)}</Card>
      </Page.Main>
    </Page>
  )
}
