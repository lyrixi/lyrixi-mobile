import React, { useMemo, useState } from 'react'
import { Page, Card, Space, Button, Radio, Input } from 'lyrixi-mobile'

const buttons = Array.from({ length: 6 }).map((_, index) => (
  <Button key={index}>Button {index + 1}</Button>
))

export default () => {
  const [sizeMode, setSizeMode] = useState('l')
  const [customGap, setCustomGap] = useState(20)

  const gapSize = useMemo(() => {
    if (sizeMode === 'custom') {
      return [customGap, customGap]
    }
    return sizeMode
  }, [customGap, sizeMode])

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>间距大小</Card.Header>
          <Card.Main>
            <Radio.Group
              multiple={false}
              value={sizeMode}
              list={[
                { id: 'l', name: '大' },
                { id: 'm', name: '中' },
                { id: 's', name: '小' },
                { id: 'custom', name: '自定义间距' }
              ]}
              onChange={(value) => {
                setSizeMode(value?.id)
              }}
            />
            <Input.Range
              min={0}
              max={64}
              value={customGap}
              disabled={sizeMode !== 'custom'}
              onChange={(value) => setCustomGap(value)}
              style={{ width: '50%' }}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>基础间距</Card.Header>
          <Card.Main>
            <Space size={gapSize}>{buttons.slice(0, 3)}</Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>垂直布局</Card.Header>
          <Card.Main>
            <Space direction="vertical" size={gapSize}>
              {buttons.slice(0, 2)}
            </Space>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>分隔符</Card.Header>
          <Card.Main>
            <Space size={gapSize} separator="|">
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

        <Card>
          <Card.Header>紧凑布局</Card.Header>
          <Card.Main>
            <Space.Compact size="m">
              <Space.Addon>+86</Space.Addon>
              <Button color="primary" backgroundColor="primary">
                发送验证码
              </Button>
              <Button>重试</Button>
            </Space.Compact>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
