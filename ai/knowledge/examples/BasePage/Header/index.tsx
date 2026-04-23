import React, { type FC } from 'react'
import { Page, Text, LocaleUtil } from 'lyrixi-mobile'

import type { HeaderProps } from '../types'

const locale = LocaleUtil.locale

const Header: FC<HeaderProps> = (props) => {
  const { className, style } = props

  return (
    <Page.Header className={className} style={style}>
      <Text style={{ padding: '12px' }}>{locale('Header')}</Text>
    </Page.Header>
  )
}

export default Header
