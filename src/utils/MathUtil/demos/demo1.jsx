import React from 'react'
import vconsole from 'vconsole'

import { MathUtil } from 'lyrixi-mobile'

// 内库使用-start
import { Page } from 'lyrixi-mobile'
// 内库使用-end

/* 测试使用-start
import Page from 'library/components/Layout'
测试使用-end */

new vconsole()

export default () => {
  return (
    <Page>
      <Page.Main>
        <h2>组件</h2>
        <p className="demo-title">计算</p>
        {MathUtil.strip(0.1 * 0.2)}
      </Page.Main>
    </Page>
  )
}
