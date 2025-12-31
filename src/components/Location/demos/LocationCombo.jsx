import React from 'react'
import { LocaleUtil, Page, FooterBar } from 'lyrixi-mobile'

// 底部
function Foot({ onOk, onClear }) {
  return (
    <Page.Footer className="mappage-footer">
      <FooterBar>
        <FooterBar.Button className="lyrixi-primary" onClick={onOk}>
          {LocaleUtil.locale('确定', 'lyrixi.ok')}
        </FooterBar.Button>
        <FooterBar.Button onClick={onClear}>{LocaleUtil.locale('清空标注')}</FooterBar.Button>
      </FooterBar>
    </Page.Footer>
  )
}
export default Foot
