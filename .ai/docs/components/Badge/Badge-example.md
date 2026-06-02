# Badge Example

以下示例位于本目录 `demos/`（由 `src/components/Badge/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Badge } from 'lyrixi-mobile'`

## demos/Badge.tsx

```tsx
import { Page, Badge } from 'lyrixi-mobile'

export default function BadgeDemo() {
  return (
    <Page>
      <Page.Main>
        <Badge maxLength={2} ellipsis={'+'}>
          1000
        </Badge>
      </Page.Main>
    </Page>
  )
}
```
