# Divider Example

以下示例位于本目录 `demos/`（由 `src/components/Divider/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Divider } from 'lyrixi-mobile'`

## demos/Divider.tsx

```tsx
import { Page, Divider } from 'lyrixi-mobile'

export default function DividerDemo() {
  return (
    <Page>
      <Page.Main>
        <Divider>Divider</Divider>
      </Page.Main>
    </Page>
  )
}
```
