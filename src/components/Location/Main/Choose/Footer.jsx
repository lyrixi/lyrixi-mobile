import React from 'react'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Page from './../../../Page'
import FooterBar from './../../../FooterBar'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, FooterBar } from 'lyrixi-mobile'
测试使用-end */

// 底部
function Foot({ onOk, onClear }) {
  return (
    <Page.Footer className="lyrixi-map-footer">
      <FooterBar>
        {onOk && (
          <FooterBar.Button block size="l" backgroundColor="primary" color="white" onClick={onOk}>
            {LocaleUtil.locale('确定', 'lyrixi.ok')}
          </FooterBar.Button>
        )}
        {onClear && (
          <FooterBar.Button
            block
            size="l"
            backgroundColor="default"
            color="default"
            onClick={onClear}
          >
            {LocaleUtil.locale('清空标注')}
          </FooterBar.Button>
        )}
      </FooterBar>
    </Page.Footer>
  )
}
export default Foot
