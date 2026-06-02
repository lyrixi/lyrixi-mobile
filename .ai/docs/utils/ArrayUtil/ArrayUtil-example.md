# ArrayUtil Example

以下示例位于本目录 `demos/`（由 `src/utils/ArrayUtil/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { ArrayUtil } from 'lyrixi-mobile'`

## demos/ArrayUtil.tsx

```tsx
import { Clipboard, Toast } from 'lyrixi-mobile'

export default function ArrayUtilDemo() {
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
