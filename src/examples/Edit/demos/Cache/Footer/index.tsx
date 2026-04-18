import React from 'react'
import { Page, LocaleUtil } from 'lyrixi-mobile'
import { ExampleFooterBar } from '@examples-compat'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 底部
function Footer({ onOk, onCancel }: { onOk?: () => void; onCancel?: () => void }) {
  return (
    <Page.Footer>
      <ExampleFooterBar>
        {onCancel && (
          <ExampleFooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {locale('Cancel')}
          </ExampleFooterBar.Button>
        )}
        {onOk && (
          <ExampleFooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {locale('Ok')}
          </ExampleFooterBar.Button>
        )}
      </ExampleFooterBar>
    </Page.Footer>
  )
}

export default Footer
