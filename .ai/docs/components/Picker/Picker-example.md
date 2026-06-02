# Picker Example

以下示例位于本目录 `demos/`（由 `src/components/Picker/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Picker } from 'lyrixi-mobile'`

## demos/PickerCombo.tsx

```tsx
import { useEffect, useRef, useState } from 'react'

import { Picker, Page, type PickerComboRef, type PickerItem } from 'lyrixi-mobile'

export default function PickerComboDemo() {
  const pickerRef = useRef<PickerComboRef | null>(null)
  const [list, setList] = useState<PickerItem[]>([])
  const [value, setValue] = useState<PickerItem[] | null>(null)
  useEffect(() => {
    setTimeout(() => {
      console.log('pickerRef:', pickerRef)
      setList([
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
        { id: '9', name: '9' },
        { id: '10', name: '10' }
      ])
      setValue([{ id: '2', name: '2' }])
    }, 2000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Picker.Combo
          ref={pickerRef}
          allowClear
          safeArea
          title="标题"
          cancelNode={null}
          okNode=""
          placeholder="Please select"
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/PickerComboInput.tsx

```tsx
import { useState } from 'react'

import { Card, Page, Picker, type PickerItem } from 'lyrixi-mobile'

export default function PickerComboInputDemo() {
  const [value, setValue] = useState<PickerItem[] | null>(null)
  const list: PickerItem[] = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>结合输入框和选择器</Card.Header>
          <Card.Main>
            <Picker.Combo
              list={list}
              value={value}
              onChange={(v) => setValue(v)}
              placeholder="请选择"
              allowClear
            />
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/PickerModal.tsx

```tsx
import { useEffect, useState } from 'react'

import { Picker, Page, type PickerItem } from 'lyrixi-mobile'

export default function PickerModalDemo() {
  const [list, setList] = useState<PickerItem[]>([])
  const [value, setValue] = useState<PickerItem[] | null>([
    { id: '8571532967972181136', name: '0507-打印' }
  ])

  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          name: '0507-打印',
          id: '8571532967972181136'
        },
        {
          name: '0507-打印_副本',
          id: '8421508242493921754'
        }
      ])
    }, 3000)
  }, [])
  return (
    <Page>
      <Page.Main>
        <Picker.Modal
          open
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
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

## demos/PickerMain.tsx

```tsx
import { useState } from 'react'

import { Picker, Page, type PickerItem } from 'lyrixi-mobile'

export default function PickerMainDemo() {
  const list: PickerItem[] = [
    { id: '1', name: '1' },
    { id: '2', name: '2' }
  ]
  const [value, setValue] = useState<PickerItem[] | null>(null)
  return (
    <Page>
      <Page.Main>
        <Picker.Main
          value={value}
          list={list}
          onChange={(newValue) => {
            console.log('onChange:', newValue)
            setValue(newValue)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```
