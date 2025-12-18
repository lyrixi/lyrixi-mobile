import React, { useState } from 'react'
import { Page, Card, Flex, Button, Checkbox, Input } from 'lyrixi-mobile'

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
          <Card.Header>Gap Config</Card.Header>
          <Card.Main>
            <Checkbox.Group
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
          <Card.Header>Horizontal</Card.Header>
          <Card.Main>
            <Flex gap={gap}>{buttons.slice(0, 3)}</Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Vertical</Card.Header>
          <Card.Main>
            <Flex direction="vertical" gap={gap}>
              {buttons.slice(0, 2)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: start</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="start">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: center</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="center">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: end</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="end">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: between</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="between">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: around</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="around">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: evenly</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="evenly">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Wrap</Card.Header>
          <Card.Main>
            <Flex gap={gap} wrap>
              {buttons}
            </Flex>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
