import React from 'react'
import { Page, Result, Button, LocaleUtil } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Result status={'500'}>
          <Button
            className="lyrixi-result-button"
            color="primary"
            style={{ marginTop: 77 }}
            onClick={() => {
              window.location.reload()
            }}
          >
            {LocaleUtil.locale('重试')}
          </Button>
          <Button
            className="lyrixi-result-button lyrixi-bg-white"
            onClick={() => {
              Bridge.back()
            }}
          >
            {LocaleUtil.locale('返回')}
          </Button>
        </Result>
      </Page.Main>
    </Page>
  )
}
