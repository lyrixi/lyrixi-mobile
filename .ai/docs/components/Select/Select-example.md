# Select Example

以下示例位于本目录 `demos/`（由 `src/components/Select/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Select } from 'lyrixi-mobile'`

## demos/SelectCombo.tsx

```tsx
import { useState, type CSSProperties } from 'react'
import { Page, Select, Card, ToolBar, Text, ObjectUtil, type SelectItem } from 'lyrixi-mobile'
import flatList from './flatList'
import groupList from './groupList'

const SelectCombo = () => {
  const [keyword, setKeyword] = useState('')
  const [singleValue, setSingleValue] = useState<SelectItem | null>(null)

  const [multipleValue, setMultipleValue] = useState<SelectItem[]>([
    {
      allowClear: true,
      id: '1',
      name: 'Option'
    },
    {
      id: '2',
      name: 'Option2',
      style: {
        color: 'red',
        padding: 0,
        backgroundColor: 'transparent'
      }
    },
    {
      id: '3',
      name: 'Option3',
      disabled: true,
      allowClear: true
    }
  ])
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Single Select</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              portal={document.body}
              placeholder="Single Select"
              allowClear
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(Array.isArray(v) ? (v[0] ?? null) : v)}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Select</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              multiple
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={(v) => setMultipleValue(Array.isArray(v) ? v : [])}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Select separator</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              multiple
              separator="|"
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={(v) => setMultipleValue(Array.isArray(v) ? v : [])}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Single tags</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Single tags Select"
              mode={'tags'}
              // disabled
              allowClear
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(Array.isArray(v) ? (v[0] ?? null) : v)}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Tags</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              mode={'tags'}
              multiple
              // disabled
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={(v) => setMultipleValue(Array.isArray(v) ? v : [])}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Multiple Tags separator</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Multiple Select"
              mode={'tags'}
              separator=","
              multiple
              // disabled
              allowClear
              list={flatList}
              value={multipleValue}
              onChange={(v) => setMultipleValue(Array.isArray(v) ? v : [])}
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Custom Checkbox</Card.Header>
          <Card.Main>
            <Select.Combo
              title="Select"
              placeholder="Custom Checkbox"
              allowClear
              list={flatList}
              value={singleValue}
              onChange={(v) => setSingleValue(Array.isArray(v) ? (v[0] ?? null) : v)}
              checkable
              checkboxPosition="left"
            />
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>Group</Card.Header>
          <Card.Main>
// ... 其余见 demos/SelectCombo.tsx 全文
```
