import React from 'react'
import { Page, LocaleUtil } from 'lyrixi-mobile'
import { ExampleFooterBar } from '@examples-compat'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 底部
function Footer({
  ok,
  cancel,
  onOk,
  onCancel
}: {
  ok?: string
  cancel?: string
  onOk?: () => void
  onCancel?: () => void
}) {
  return (
    <Page.Footer>
      <ExampleFooterBar>
        {onCancel && (
          <ExampleFooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {cancel || locale('Cancel')}
          </ExampleFooterBar.Button>
        )}
        {onOk && (
          <ExampleFooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {ok || locale('Ok')}
          </ExampleFooterBar.Button>
        )}
      </ExampleFooterBar>
    </Page.Footer>
  )
}

export default Footer
