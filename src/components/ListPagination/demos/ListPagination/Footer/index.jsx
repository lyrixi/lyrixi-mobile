import React from 'react'
import { Page, FooterBar, LocaleUtil } from 'lyrixi-mobile'

// 样式图片等资源文件导入
const locale = LocaleUtil.locale

// 底部
function Footer({ okText, cancelText, onOk, onCancel }) {
  const buttons = []
  if (onCancel) {
    buttons.push({
      name: cancelText || locale('Cancel'),
      onClick: onCancel
    })
  }
  if (onOk) {
    buttons.push({
      name: okText || locale('Save'),
      color: 'primary',
      onClick: onOk
    })
  }

  return (
    <Page.Footer>
      <FooterBar list={buttons} />
    </Page.Footer>
  )
}

export default Footer
