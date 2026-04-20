import React from 'react'
import { FooterBar, LocaleUtil, Page } from 'lyrixi-mobile'

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
      <FooterBar>
        {onCancel && (
          <FooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {cancel || locale('Cancel')}
          </FooterBar.Button>
        )}
        {onOk && (
          <FooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {ok || locale('Ok')}
          </FooterBar.Button>
        )}
      </FooterBar>
    </Page.Footer>
  )
}

export default Footer
