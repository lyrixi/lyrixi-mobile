# Transfer Example

以下示例位于本目录 `demos/`（由 `src/components/Transfer/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Transfer } from 'lyrixi-mobile'`

## demos/Transfer.tsx

```tsx
import { useState } from 'react'

import { Card, Page, Transfer, type TransferItem } from 'lyrixi-mobile'

export default function TransferDemo() {
  const [value, setValue] = useState<TransferItem[]>([{ id: '1', name: '选项1' }])
  const list = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' },
    { id: '4', name: '选项4' },
    { id: '5', name: '选项5' }
  ]
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Transfer 穿梭框</Card.Header>
          <Card.Main>
            <Transfer.Main
              list={list}
              value={value}
              titles={['待选', '已选']}
              onChange={(v) => setValue(v)}
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/Combo/index.tsx

```tsx
import { useRef, useState } from 'react'

import { Page, Transfer, type TransferItem } from 'lyrixi-mobile'

export default function TransferComboDemo() {
  const transferRef = useRef(null)
  const [value, setValue] = useState<TransferItem[]>([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Transfer.Combo</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title">Transfer Combo</div>
        <Transfer.Combo
          ref={transferRef}
          className="lyrixi-border-b"
          placeholder="Select"
          allowClear
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' },
            { id: '7', name: '7' },
            { id: '8', name: '8' },
            { id: '9', name: '9' },
            { id: '10', name: '10' },
            { id: '11', name: '11' },
            { id: '12', name: '12' },
            { id: '13', name: '13' },
            { id: '14', name: '14' },
            { id: '15', name: '15' },
            { id: '16', name: '16' },
            { id: '17', name: '17' },
            { id: '18', name: '18' },
            { id: '19', name: '19' }
          ]}
          value={value}
          onChange={(newValue) => {
            console.log(newValue)
            setValue(newValue)
          }}
          titles={{ selected: '标题1', unSelected: '标题2' }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/Modal/index.tsx

```tsx
import { useState } from 'react'

import { Page, Transfer, type TransferItem } from 'lyrixi-mobile'

export default function TransferModalDemo() {
  const [value, setValue] = useState<TransferItem[]>([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Transfer.Modal</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title">Transfer Modal</div>
        <Transfer.Modal
          open={true}
          list={[
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' }
          ]}
          value={value}
          titles={['标题1', '标题2']}
          onChange={(newValue) => {
            console.log('newValue:', newValue)
            setValue(newValue)
          }}
          onClose={() => {
            console.log('onClose')
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/Main/index.tsx

```tsx
import { useState } from 'react'

import { Page, Transfer, type TransferItem } from 'lyrixi-mobile'

export default function TransferMainDemo() {
  const [value, setValue] = useState<TransferItem[]>([
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ])
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Transfer.Main</Page.Header>
      <div className="demo-title">Transfer List</div>
      <Transfer.Main
        list={[
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
          { id: '4', name: '4' },
          { id: '5', name: '5' },
          { id: '6', name: '6' }
        ]}
        value={value}
        titles={['标题1', '标题2']}
        onChange={(newValue) => {
          console.log(newValue)
          setValue(newValue)
        }}
      />
    </Page>
  )
}
```
