import { Page, LocaleUtil, FooterBar } from 'lyrixi-mobile'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 底部
function Footer({ onOk, onCancel }: { onOk?: () => void; onCancel?: () => void }) {
  return (
    <Page.Footer>
      <FooterBar>
        {onCancel && (
          <FooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {locale('Cancel')}
          </FooterBar.Button>
        )}
        {onOk && (
          <FooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {locale('Ok')}
          </FooterBar.Button>
        )}
      </FooterBar>
    </Page.Footer>
  )
}

export default Footer
