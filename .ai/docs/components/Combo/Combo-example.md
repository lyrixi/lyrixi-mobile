# Combo Example

以下示例位于本目录 `demos/`（由 `src/components/Combo/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Combo } from 'lyrixi-mobile'`

## demos/Combo.tsx

```tsx
import { Page, Combo } from 'lyrixi-mobile'

export default function ComboDemo() {
  return (
    <Page>
      <Page.Main>
        <Combo>Custom Combo</Combo>
      </Page.Main>
    </Page>
  )
}
```
