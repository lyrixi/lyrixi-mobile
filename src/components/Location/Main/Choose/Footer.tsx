import type { LocationMainChooseFooterProps } from './Location.Main.Choose.Footer.types'

// 内库使用-start
import LocaleUtil from './../../../../utils/LocaleUtil'
import Page from './../../../Page'
import FooterBar from './../../../FooterBar'
import type { FooterBarComponents } from './../../../FooterBar/types/FooterBar.modules.types'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Page, FooterBar } from 'lyrixi-mobile'
测试使用-end */

const FooterBarComp = FooterBar as FooterBarComponents

function Foot({ onOk, onClear }: LocationMainChooseFooterProps) {
  return (
    <Page.Footer className="lyrixi-map-footer">
      <FooterBarComp>
        {onOk && (
          <FooterBarComp.Button block size="l" variant="filled" color="primary" onClick={onOk}>
            {LocaleUtil.locale('确定', 'lyrixi_38cf16f2204ffab8a6e0187070558721')}
          </FooterBarComp.Button>
        )}
        {onClear && (
          <FooterBarComp.Button
            block
            size="l"
            variant="filled" color="default"
            color="default"
            onClick={onClear}
          >
            {LocaleUtil.locale('清空标注', 'lyrixi_ac562906083401454f9b6ab34cd113b8')}
          </FooterBarComp.Button>
        )}
      </FooterBarComp>
    </Page.Footer>
  )
}
export default Foot
