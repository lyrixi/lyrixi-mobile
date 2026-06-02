# Card Example

以下示例位于本目录 `demos/`（由 `src/components/Card/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Card } from 'lyrixi-mobile'`

## demos/Card.tsx

```tsx
import { Page, Card } from 'lyrixi-mobile'

export default function CardDemo() {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Main>Content content</Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/CardHeader.tsx

```tsx
import { Page, Card } from 'lyrixi-mobile'

export default function CardHeaderDemo() {
  return (
    <Page>
      <Page.Main>
        <Card.Header>{/* Card.Header 示例内容 */}</Card.Header>
      </Page.Main>
    </Page>
  )
}
```

## demos/CardMain.tsx

```tsx
import { Page, Card } from 'lyrixi-mobile'

export default function CardMainDemo() {
  return (
    <Page>
      <Page.Main>
        <Card.Main>{/* Card.Main 示例内容 */}</Card.Main>
      </Page.Main>
    </Page>
  )
}
```
