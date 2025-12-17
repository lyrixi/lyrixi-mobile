import React, { useMemo, useState } from 'react'
import { Page, Card, Space, Button, Radio, Input } from 'lyrixi-mobile'

const buttons = Array.from({ length: 6 }).map((_, index) => (
  <Button key={index}>Button {index + 1}</Button>
))

export default () => {
  const [size, setSize] = useState('s')
  const [sizeMode, setSizeMode] = useState('l')

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Size Config</Card.Header>
          <Card.Main>
            <Radio.Group
              multiple={false}
              value={sizeMode}
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
                setSizeMode(value?.id)
                setSize(value?.id !== 'custom' ? value?.id : 2)
              }}
            />
            <Input.Range
              min={0}
              max={64}
              value={typeof size === 'number' ? size : 2}
              disabled={sizeMode !== 'custom'}
              onChange={(value) => setSize(value)}
              style={{ width: '50%' }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>基础间距</Card.Header>
          <Card.Main>
            <Space size={size}>{buttons.slice(0, 3)}</Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>垂直布局</Card.Header>
          <Card.Main>
            <Space direction="vertical" size={size}>
              {buttons.slice(0, 2)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>分隔符</Card.Header>
          <Card.Main>
            <Space size={size} separator="|">
              {buttons.slice(0, 3)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>换行</Card.Header>
          <Card.Main>
            <Space size={[12, 12]} wrap>
              {buttons}
            </Space>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
