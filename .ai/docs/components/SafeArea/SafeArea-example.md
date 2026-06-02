# SafeArea Example

以下示例位于本目录 `demos/`（由 `src/components/SafeArea/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { SafeArea } from 'lyrixi-mobile'`

## demos/SafeArea.tsx

```tsx
import { useEffect } from 'react'

import { SafeArea } from 'lyrixi-mobile'

export default function SafeAreaDemo() {
  useEffect(() => {}, [])

  return (
    <div
      className="lyrixi-flex lyrixi-position-absolute lyrixi-full"
      data-safe-area="auto-border-bottom"
      style={{ backgroundColor: 'green', borderColor: 'red' }}
    >
      You can test it on mobile, if you can see a red rectangle, the mobile needs a safe area
      <SafeArea style={{ backgroundColor: 'red' }} />
      Use root stage safe area
      <div>{`If you want to test to the safe area, you can invoke: SafeArea.debug()`}</div>
    </div>
  )
}
```
