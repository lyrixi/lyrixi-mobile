# DOMUtil Example

以下示例位于本目录 `demos/`（由 `src/utils/DOMUtil/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { DOMUtil } from 'lyrixi-mobile'`

## demos/DOMUtil.tsx

```tsx
import { DOMUtil } from 'lyrixi-mobile'

export default function DOMUtilDemo() {
  function handleClick() {
    console.log(
      DOMUtil.classNames(undefined, null, ' ', 'className1', 'className2', 'className3 className4')
    )
  }
  return (
    <>
      <div onClick={handleClick}>Generate class</div>
    </>
  )
}
```
