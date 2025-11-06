import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../../utils/LocaleUtil'
import Page from './../../../../Page'
import FooterBar from './../../../../FooterBar'
import Button from './../../../../Button'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, Button } from 'lyrixi-mobile'
测试使用-end */

// 底部
function Foot({ onOk, onClear }) {
  return (
    <Page.Footer className="mappage-footer">
      <FooterBar>
        <FooterBar.Button className="lyrixi-primary" onClick={onOk}>
          {LocaleUtil.locale('确定', 'lyrixi_ok')}
        </FooterBar.Button>
        <FooterBar.Button onClick={onClear}>
          {LocaleUtil.locale('清空标注', 'lyrixi_empty_marker')}
        </FooterBar.Button>
      </FooterBar>
    </Page.Footer>
  )
}
export default Foot
