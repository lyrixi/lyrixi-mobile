# Row Example

以下示例位于本目录 `demos/`（由 `src/components/Row/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Row } from 'lyrixi-mobile'`

## demos/Row.tsx

```tsx
import { Page, Divider, Row } from 'lyrixi-mobile'

export default function RowDemo() {
  return (
    <Page>
      <Page.Main>
        <Divider>Each row has 24 columns</Divider>
        <Row>
          <Row.Col
            span={8}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Name:
          </Row.Col>
          <Row.Col
            span={16}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Morpheus
          </Row.Col>
          <Row.Col
            span={8}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Age:
          </Row.Col>
          <Row.Col
            span={16}
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Twenty-eight
          </Row.Col>
        </Row>

        <Divider>Auto column layout</Divider>
        <Row>
          <Row.Col
            span="auto"
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Name:
          </Row.Col>
          <Row.Col
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Morpheus
          </Row.Col>
          <Row.Col
            span="auto"
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Age:
          </Row.Col>
          <Row.Col
            className="lyrixi-color-white"
            style={{
              backgroundColor: 'var(--lyrixi-color-primary)',
              padding: 'var(--lyrixi-space-m)',
              border: '1px solid white',
              boxSizing: 'border-box'
            }}
          >
            Twenty-eight
          </Row.Col>
        </Row>
      </Page.Main>
    </Page>
  )
}
```

## demos/RowCol.tsx

```tsx
import { Page, Row } from 'lyrixi-mobile'

export default function RowColDemo() {
  return (
    <Page>
      <Page.Main>
        <Row.Col>{/* Row.Col 示例内容 */}</Row.Col>
      </Page.Main>
    </Page>
  )
}
```
