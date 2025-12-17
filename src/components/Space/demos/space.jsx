import React, { useState } from 'react'
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
          <Card.Header>general</Card.Header>
          <Card.Main>
            <Space size={size}>{buttons.slice(0, 3)}</Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>vertical</Card.Header>
          <Card.Main>
            <Space direction="vertical" size={size}>
              {buttons.slice(0, 2)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>separator</Card.Header>
          <Card.Main>
            <Space size={size} separator="|">
              {buttons.slice(0, 3)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>wrap</Card.Header>
          <Card.Main>
            <Space size={size} wrap>
              {buttons}
            </Space>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
