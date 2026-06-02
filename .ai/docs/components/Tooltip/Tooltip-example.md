# Tooltip Example

以下示例位于本目录 `demos/`（由 `src/components/Tooltip/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Tooltip } from 'lyrixi-mobile'`

## demos/Tooltip.tsx

```tsx
import { Tooltip } from 'lyrixi-mobile'

export default function TooltipDemo() {
  return (
    <>
      <Tooltip
        onOpen={() => {
          console.log('open:', true)
        }}
        onClose={() => {
          console.log('open:', false)
        }}
        modalRender={() => {
          return <div style={{ margin: 100 }}>Modal Content</div>
        }}
      >
        <div style={{ margin: 100 }}>Combo</div>
      </Tooltip>
    </>
  )
}
```
