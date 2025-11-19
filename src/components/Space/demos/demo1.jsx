import React, { useMemo, useState } from 'react'
import { Page, Divider, Space, Button, Radio, Input } from 'lyrixi-mobile'

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
        <Divider>基础间距</Divider>
        <Space size="l">{buttons.slice(0, 3)}</Space>

        <Divider>垂直布局</Divider>
        <Space direction="vertical" size="m">
          {buttons.slice(0, 2)}
        </Space>

        <Divider>间距大小</Divider>
        <Space direction="vertical" size="m">
          <Radio.Group
            multiple={false}
            value={sizeMode}
            list={[
              { id: 'l', name: '大' },
              { id: 'm', name: '中' },
              { id: 's', name: '小' },
              { id: 'custom', name: '自定义间距' }
            ]}
            onChange={(value) => setSizeMode(value)}
          />
          <Input.Range
            min={0}
            max={64}
            value={customGap}
            disabled={sizeMode !== 'custom'}
            onChange={(value) => setCustomGap(value)}
          />
          <Space size={gapSize}>{buttons.slice(0, 4)}</Space>
        </Space>

        <Divider>分隔符</Divider>
        <Space size="m" separator="|">
          {buttons.slice(0, 3)}
        </Space>

        <Divider>换行</Divider>
        <Space size={[12, 12]} wrap>
          {buttons}
        </Space>

        <Divider>紧凑布局</Divider>
        <Space.Compact size="m">
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
