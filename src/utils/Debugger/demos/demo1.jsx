import React, { useEffect } from 'react'
import { Page, Debugger } from 'lyrixi-mobile'

export default () => {
  useEffect(() => {
    // 留后门调试: 连续点击10次, 显示vconsole
    Debugger.addTrigger()
  }, [])

  return (
    <Page>
      <Page.Main>左下角点击10次呼出暗门</Page.Main>
    </Page>
  )
}
