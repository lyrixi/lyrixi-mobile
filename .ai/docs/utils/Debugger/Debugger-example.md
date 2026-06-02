# Debugger Example

以下示例位于本目录 `demos/`（由 `src/utils/Debugger/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Debugger } from 'lyrixi-mobile'`

## demos/Debugger.tsx

```tsx
import { useEffect } from 'react'

import { Page, Debugger } from 'lyrixi-mobile'

export default function DebuggerDemo() {
  useEffect(() => {
    // 留后门调试: 连续点击10次, 显示vconsole
    Debugger.addTrigger()
  }, [])

  return (
    <Page>
      <Page.Main>左下角点击10次呼出暗门</Page.Main>
    </Page>
  )
}
```
