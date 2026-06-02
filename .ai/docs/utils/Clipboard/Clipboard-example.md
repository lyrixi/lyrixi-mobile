# Clipboard Example

以下示例位于本目录 `demos/`（由 `src/utils/Clipboard/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Clipboard } from 'lyrixi-mobile'`

## demos/Clipboard.tsx

```tsx
import { Clipboard, Toast } from 'lyrixi-mobile'

export default function ClipboardDemo() {
  function handleClick() {
    Clipboard.copy('https://lyrixi.github.io/lyrixi-mobile', {
      onSuccess: () => {
        Toast.show({ content: 'Copy to clipboard success!' })
      }
    })
  }
  return (
    <>
      <div onClick={handleClick}>Copy to clipboard</div>
    </>
  )
}
```
