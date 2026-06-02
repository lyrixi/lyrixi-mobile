# Flex Example

以下示例位于本目录 `demos/`（由 `src/components/Flex/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Flex } from 'lyrixi-mobile'`

## demos/Flex1.tsx

```tsx
import { useState } from 'react'

import { Page, Card, Flex, Button, Checkbox, Input } from 'lyrixi-mobile'

const buttons = Array.from({ length: 6 }).map((_, index) => <Button key={index}>Button {index + 1}</Button>)

export default function Flex1Demo() {
  const [gap, setGap] = useState<string | number>('s')
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
                if (value == null || Array.isArray(value)) return
                setMode(String(value.id))
                setGap(value.id !== 'custom' ? String(value.id) : 2)
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
          <Card.Header>Justify: start</Card.Header>
          <Card.Main>
            <Flex gap={gap} justify="start">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Justify: center</Card.Header>
          <Card.Main>
            <Flex gap={gap} justify="center">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Justify: end</Card.Header>
          <Card.Main>
            <Flex gap={gap} justify="end">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Justify: between</Card.Header>
          <Card.Main>
            <Flex gap={gap} justify="between">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Justify: around</Card.Header>
          <Card.Main>
            <Flex gap={gap} justify="around">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Justify: evenly</Card.Header>
          <Card.Main>
            <Flex gap={gap} justify="evenly">
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: start</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="start" style={{ height: 100 }}>
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: center</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="center" style={{ height: 100 }}>
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align: end</Card.Header>
          <Card.Main>
            <Flex gap={gap} align="end" style={{ height: 100 }}>
              {buttons.slice(0, 3)}
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Align 分布: between（竖向主轴示意，固定高度可见两端贴边、中间等分）</Card.Header>
          <Card.Main>
            <Flex gap={gap} direction="vertical" justify="between" style={{ height: 140 }}>
              {buttons.slice(0, 2)}
            </Flex>
// ... 其余见 demos/Flex1.tsx 全文
```

## demos/FlexCompact.tsx

```tsx
import { Page, Card, Flex, Button } from 'lyrixi-mobile'

export default function FlexCompactDemo() {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Horizontal</Card.Header>
          <Card.Main>
            <Flex.Compact size="m">
              <Button>Content</Button>
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Flex.Compact>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Block</Card.Header>
          <Card.Main>
            <Flex.Compact block>
              <Button>Content</Button>
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Flex.Compact>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Size</Card.Header>
          <Card.Main>
            <Flex direction="vertical">
              <Flex.Compact size="s">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact size="m">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact size="l">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>
            </Flex>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Radius</Card.Header>
          <Card.Main>
            <Flex direction="vertical">
              <Flex.Compact radius="s">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact radius="m">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact radius="l">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>
            </Flex>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Vertical</Card.Header>
          <Card.Main>
            <Flex.Compact direction="vertical" size="m">
              <Button>Button1</Button>
              <Button color="primary" backgroundColor="white">
                Button2
              </Button>
              <Button>Button3</Button>
            </Flex.Compact>
          </Card.Main>
        </Card>
        Flex.Compact supports `Button`
      </Page.Main>
    </Page>
  )
}
```
