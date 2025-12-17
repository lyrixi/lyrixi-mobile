import React, { useState } from 'react'
import { Page, Card, Space, Button, Radio, Input } from 'lyrixi-mobile'

const buttons = Array.from({ length: 6 }).map((_, index) => (
  <Button key={index}>Button {index + 1}</Button>
))

export default () => {
  const [gap, setGap] = useState('s')
  const [mode, setMode] = useState('l')

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Size Config</Card.Header>
          <Card.Main>
            <Radio.Group
              multiple={false}
              value={mode}
              list={[
                { id: 'xxl', name: 'xxl' },
                { id: 'xl', name: 'xl' },
                { id: 'l', name: 'l' },
                { id: 'm', name: 'm' },
                { id: 's', name: 's' },
                { id: 'xs', name: 'xs' },
                { id: 'xxs', name: 'xxs' },
                { id: 'xxxs', name: 'xxxs' },
                { id: 'custom', name: 'Custom' }
              ]}
              onChange={(value) => {
                setMode(value?.id)
                setGap(value?.id !== 'custom' ? value?.id : 2)
              }}
            />
            <Input.Range
              min={0}
              max={64}
              value={typeof gap === 'number' ? gap : 2}
              disabled={mode !== 'custom'}
              onChange={(value) => setGap(value)}
              style={{ width: '50%' }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>general</Card.Header>
          <Card.Main>
            <Space gap={gap}>{buttons.slice(0, 3)}</Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>vertical</Card.Header>
          <Card.Main>
            <Space direction="vertical" gap={gap}>
              {buttons.slice(0, 2)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>separator</Card.Header>
          <Card.Main>
            <Space gap={gap} separator="|">
              {buttons.slice(0, 3)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>wrap</Card.Header>
          <Card.Main>
            <Space gap={gap} wrap>
              {buttons}
            </Space>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
