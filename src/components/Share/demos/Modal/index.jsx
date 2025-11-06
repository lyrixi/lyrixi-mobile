import React from 'react'
import { Share, Page } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Share To</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Share.Modal
          open
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
