import React, { type FC } from 'react'
import { Page, Text, LocaleUtil } from 'lyrixi-mobile'

import type { MainProps } from '../types'
import { getBasePageDetailKeyCount } from '../types'

const locale = LocaleUtil.locale

const Main: FC<MainProps> = ({ data }) => {
  const keyCount: number = getBasePageDetailKeyCount(data)

  return (
    <Page.Main>
      <span title={String(keyCount)}>
        <Text style={{ padding: '12px' }}>{locale('Main')}</Text>
      </span>
    </Page.Main>
  )
}

export default Main
