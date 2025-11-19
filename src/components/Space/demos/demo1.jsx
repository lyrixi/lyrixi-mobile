import React from 'react'
import { Page, Divider, Space, Button } from 'lyrixi-mobile'

const buttons = Array.from({ length: 6 }).map((_, index) => (
  <Button key={index}>Button {index + 1}</Button>
))

export default () => {
  return (
    <Page>
      <Page.Main>
        <Divider>基础间距</Divider>
        <Space size="large">{buttons.slice(0, 3)}</Space>

        <Divider>垂直布局</Divider>
        <Space direction="vertical" size="middle">
          {buttons.slice(0, 2)}
        </Space>

        <Divider>分隔符</Divider>
        <Space size="middle" split="|">
          {buttons.slice(0, 3)}
        </Space>

        <Divider>换行</Divider>
        <Space size={[12, 12]} wrap>
          {buttons}
        </Space>

        <Divider>紧凑布局</Divider>
        <Space.Compact size="middle">
          <Space.Addon>+86</Space.Addon>
          <Button color="primary" backgroundColor="primary">
            发送验证码
          </Button>
          <Button>重试</Button>
        </Space.Compact>
      </Page.Main>
    </Page>
  )
}
