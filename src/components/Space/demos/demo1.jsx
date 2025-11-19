import React from 'react'
import { Page, Divider, Space, Button } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Divider>Space</Divider>
        <Space>
          <Button>Button1</Button>
          <Button>Button2</Button>
        </Space>
      </Page.Main>
    </Page>
  )
}
