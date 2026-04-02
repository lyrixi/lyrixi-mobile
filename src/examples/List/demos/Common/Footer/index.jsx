import React from 'react'
import { Page, FooterBar, LocaleUtil } from 'lyrixi-mobile'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 底部
function Footer({ okText, cancelText, onOk, onCancel }) {
  const buttons = []

  if (onOk) {
    buttons.push({
      name: okText || locale('Save'),
      color: 'primary',
      onClick: onOk
    })
  }

  return (
    <Page.Footer>
      <FooterBar>
        {onCancel &&
          <FooterBar.Button block backgroundColor="default" onClick={onCancel}>
            {cancelText || locale('Cancel')}
          </FooterBar.Button>
        }
        {onOk &&
          <FooterBar.Button block backgroundColor="primary" color="white" onClick={onOk}>
            {okText || locale('Ok')}
          </FooterBar.Button>
        }
      </FooterBar>
    </Page.Footer>
  )
}

export default Footer
