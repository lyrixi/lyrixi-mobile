# Checkbox Example

以下示例位于本目录 `demos/`（由 `src/components/Checkbox/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Checkbox } from 'lyrixi-mobile'`

## demos/Checkbox.tsx

```tsx
import { useState } from 'react'

import { Page, Card, Icon, Checkbox, Flex, Icons } from 'lyrixi-mobile'

export default function CheckboxDemo() {
  const [value, setValue] = useState(false)

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Variants</Card.Header>
          <Card.Main>
            <Flex gap="l">
              <Checkbox variant="solid" checked={value} onChange={setValue}>
                solid
              </Checkbox>
              <Checkbox variant="text" checked={value} onChange={setValue}>
                text
              </Checkbox>
              <Checkbox variant="outlined" checked={value} onChange={setValue}>
                outlined
              </Checkbox>
              <Checkbox variant="filled" checked={value} onChange={setValue}>
                filled
              </Checkbox>
            </Flex>
            <Flex gap="l" style={{ marginTop: '10px' }}>
              <Checkbox disabled variant="solid" checked={value} onChange={setValue}>
                solid
              </Checkbox>
              <Checkbox disabled variant="text" checked={value} onChange={setValue}>
                text
              </Checkbox>
              <Checkbox disabled variant="outlined" checked={value} onChange={setValue}>
                outlined
              </Checkbox>
              <Checkbox disabled variant="filled" checked={value} onChange={setValue}>
                filled
              </Checkbox>
            </Flex>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom</Card.Header>
          <Card.Main>
            <Checkbox
              checked={value}
              onChange={setValue}
              iconRender={({ checked }) => {
                if (!checked) return <Icon svg={Icons.Ok} className="lyrixi-opacity-0" />
                return <Icon color="primary" svg={Icons.Ok} />
              }}
            >
              Custom
            </Checkbox>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>iconPosition=right</Card.Header>
          <Card.Main>
            <Checkbox checked={value} onChange={setValue} iconPosition="right">
              iconPosition=right
            </Checkbox>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/CheckboxGroup.tsx

```tsx
import { useRef, useState } from 'react'

import { Checkbox, type CheckboxItem } from 'lyrixi-mobile'

export default function CheckboxGroupDemo() {
  const checkboxRef = useRef(null)
  const [list] = useState([
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
  const [value, setValue] = useState<CheckboxItem | CheckboxItem[] | null>(null)

  return (
    <>
      <Checkbox.Group
        ref={checkboxRef}
        // allowClear
        multiple={false}
        value={value}
        list={list}
        onChange={(newValue) => {
          console.log('onChange:', newValue)
          setValue(newValue)
        }}
      />
    </>
  )
}
```
