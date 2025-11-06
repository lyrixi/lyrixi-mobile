import React, { useRef } from 'react'
import { Share, Page } from 'lyrixi-mobile'

export default () => {
  const shareComboRef = useRef(null)
  console.log(shareComboRef)
  return (
    <Page>
      <Page.Header>When this platform is not supported, nothing will appear</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Share.Combo
          ref={shareComboRef}
          shareTo={{
            wechat: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            wecom: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            dingtalk: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            },
            lark: {
              title: '标题',
              description: '描述',
              imageUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png',
              url: 'https://www.baidu.com'
            }
          }}
        />
      </Page.Main>
    </Page>
  )
}
