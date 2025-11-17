import React from 'react'

import { Page, Divider, Steps, Icon, Card } from 'lyrixi-mobile'

const list = [
  {
    icon: <Icon className="lyrixi-iconfont lyrixi-iconfont-signature"></Icon>,
    id: 'finish',
    title: 'Finished',
    description: 'This is a description.'
  },
  {
    icon: <Icon className="lyrixi-iconfont lyrixi-iconfont-signature"></Icon>,
    id: 'progress',
    title: 'In Progress',
    description: 'This is a description.'
  },
  {
    icon: <Icon className="lyrixi-iconfont lyrixi-iconfont-signature"></Icon>,
    id: 'wait',
    title: 'Waiting',
    description: 'This is a description.'
  }
]

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Global Icon</Divider>
          <Steps iconSize={32} value={{ index: 1 }} list={list} direction="horizontal" />
        </Card>

        <Card>
          <Divider>Item Icon</Divider>
          <Steps
            iconSize={32}
            value={{
              index: 1,
              icon: <Icon className="lyrixi-iconfont lyrixi-iconfont-signature"></Icon>
            }}
            list={list}
            direction="vertical"
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
