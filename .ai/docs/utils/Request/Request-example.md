# Request Example

以下示例位于本目录 `demos/`（由 `src/utils/Request/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Request } from 'lyrixi-mobile'`

## demos/Request.tsx

```tsx
import { Request } from 'lyrixi-mobile'

export default function RequestDemo() {
  async function handleClick() {
    let response = await Request.get(
      'https://lyrixi.github.io/lyrixi-mobile/assets/district/zh_CN/86.json.info'
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request get</div>
    </>
  )
}
```

## demos/cache.tsx

```tsx
import { Request } from 'lyrixi-mobile'

export default function RequestCacheDemo() {
  async function handleClick() {
    let response = await Request.get(
      'https://lyrixi.github.io/lyrixi-mobile/assets/district/en_US/86.json',
      null,
      {
        cacheKey: '0'
      }
    )
    console.log(response)
  }
  return (
    <>
      <div onClick={handleClick}>Request by cacheKey</div>
    </>
  )
}
```
