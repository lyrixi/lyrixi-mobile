# Location Example

以下示例位于本目录 `demos/`（由 `src/components/Location/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Location } from 'lyrixi-mobile'`

## demos/LocationCombo.tsx

```tsx
import { useRef, useState, type ComponentRef } from 'react'

import { Page, Location, Card, Button } from 'lyrixi-mobile'

import type { LocationDemoComboValue } from './Location.demos.types'

export default function LocationComboDemo() {
  const [value1, setValue1] = useState<LocationDemoComboValue | null>({
    latitude: 31.990374883871525,
    longitude: 118.73769931504451,
    type: 'gcj02',
    address: '南京烽火科技'
  })

  const [value2, setValue2] = useState<LocationDemoComboValue | null>(null)
  const [value3, setValue3] = useState<LocationDemoComboValue>({
    latitude: 39.909187,
    longitude: 116.397451,
    type: 'gcj02',
    address: '天安门'
  })

  const comboRef = useRef<ComponentRef<typeof Location.Combo> | null>(null)

  return (
    <Page>
      <Page.Main>
        {/* 基础用法 */}
        <Card>
          <Card.Header>基础用法</Card.Header>
          <Card.Main>
            <Location.Combo
              value={value1}
              onChange={(val) => {
                console.log('修改:', val)
                setValue1(val)
              }}
            />
          </Card.Main>
        </Card>

        {/* 允许清除 */}
        <Card>
          <Card.Header>允许清除 (allowClear)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} allowClear onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 禁用状态 */}
        <Card>
          <Card.Header>禁用状态 (disabled)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} disabled onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 可编辑 */}
        <Card>
          <Card.Header>可编辑 (editable)</Card.Header>
          <Card.Main>
            <Location.Combo value={value2} editable onChange={setValue2} />
          </Card.Main>
        </Card>

        {/* 自动定位 */}
        <Card>
          <Card.Header>自动定位 (autoLocation)</Card.Header>
          <Card.Main>
            <Location.Combo value={value2} autoLocation onChange={setValue2} />
          </Card.Main>
        </Card>

        {/* 定位按钮可见性 */}
        <Card>
          <Card.Header>定位按钮不可见 (locationVisible=false)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} locationVisible={false} onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 选择按钮可见 */}
        <Card>
          <Card.Header>选择按钮可见 (chooseVisible)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} chooseVisible onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 预览按钮可见 */}
        <Card>
          <Card.Header>预览按钮可见 (previewVisible)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} previewVisible onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 点击动作 - 定位 */}
        <Card>
          <Card.Header>点击动作 - 定位 (clickAction=&quot;location&quot;)</Card.Header>
          <Card.Main>
            <Location.Combo value={value2} clickAction="location" onChange={setValue2} />
          </Card.Main>
        </Card>

        {/* 点击动作 - 选择 */}
        <Card>
          <Card.Header>点击动作 - 选择 (clickAction=&quot;choose&quot;)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} clickAction="choose" onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 点击动作 - 预览 */}
        <Card>
          <Card.Header>点击动作 - 预览 (clickAction=&quot;preview&quot;)</Card.Header>
          <Card.Main>
            <Location.Combo value={value1} clickAction="preview" onChange={setValue1} />
          </Card.Main>
        </Card>

        {/* 坐标类型 - WGS84 */}
        <Card>
          <Card.Header>坐标类型 - WGS84 (type=&quot;wgs84&quot;)</Card.Header>
          <Card.Main>
            <Location.Combo
              value={{
                latitude: 31.990374883871525,
                longitude: 118.73769931504451,
                type: 'wgs84',
                address: '南京烽火科技'
              }}
              type="wgs84"
              // 可以用全局设置window.MapLoaderConfig代替
              mapConfig={{
                key: '4KFq5IGKQM1c6vkVhgIpAYFu',
                type: 'bmap'
              }}
              onChange={(val) => {
                console.log('WGS84坐标:', val)
              }}
            />
          </Card.Main>
        </Card>

        {/* 坐标类型 - GCJ02 */}
        <Card>
          <Card.Header>坐标类型 - GCJ02 (type=&quot;gcj02&quot;)</Card.Header>
          <Card.Main>
            <Location.Combo
// ... 其余见 demos/LocationCombo.tsx 全文
```

## demos/LocationMain.tsx

```tsx
import { useState, useRef, useEffect, type ComponentRef } from 'react'

import { Page, Location } from 'lyrixi-mobile'

import type { LocationDemoMainValue } from './Location.demos.types'

export default function LocationMainDemo() {
  const mainRef = useRef<ComponentRef<typeof Location.Main> | null>(null)
  const [value, setValue] = useState<LocationDemoMainValue>(null)

  useEffect(() => {
    // 延迟设置值
    setTimeout(() => {
      setValue({
        address: '江苏省南京市雨花台区玉兰路98号',
        value: '江苏省南京市雨花台区玉兰路98号',
        longitude: 118.7979252979065,
        latitude: 31.968667296242337,
        type: 'gcj02'
      })
    }, 5000)
  }, [])

  return (
    <Page>
      <Location.Main
        ref={mainRef}
        open="choose"
        style={{ height: '400px' }}
        autoLocation={false}
        // 可以用全局设置window.MapLoaderConfig代替
        mapConfig={{
          key: '4KFq5IGKQM1c6vkVhgIpAYFu',
          type: 'bmap'
        }}
        value={value}
        onChange={(val) => {
          console.log('修改:', val)
          setValue(val)
        }}
      />
    </Page>
  )
}
```
