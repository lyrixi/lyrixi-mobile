import React, { type FC } from 'react'
import { Page, LocaleUtil, FooterBar } from 'lyrixi-mobile'

import type { FooterProps } from '../types'

const locale = LocaleUtil.locale

const Footer: FC<FooterProps> = ({ onCancel, onOk }) => {
  return (
    <Page.Footer>
      <FooterBar>
        {onCancel ? (
          <FooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {locale('Cancel')}
          </FooterBar.Button>
        ) : null}
        {onOk ? (
          <FooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {locale('Ok')}
          </FooterBar.Button>
        ) : null}
      </FooterBar>
    </Page.Footer>
  )
}

export default Footer
