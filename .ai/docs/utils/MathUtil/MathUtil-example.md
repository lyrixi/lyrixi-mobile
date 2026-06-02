# MathUtil Example

以下示例位于本目录 `demos/`（由 `src/utils/MathUtil/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { MathUtil } from 'lyrixi-mobile'`

## demos/MathUtil.tsx

```tsx
import vconsole from 'vconsole'

import { MathUtil } from 'lyrixi-mobile'

// 内库// 内库使用-start
import Page from './../../../components/Page'
// 内库使用-end

/* 测试使用-start
import { Page } from 'lyrixi-mobile'
测试使用-end */

new vconsole()

export default function MathUtilDemo() {
  return (
    <Page>
      <Page.Main>
        <h2>组件</h2>
        <p className="demo-title">计算</p>
        {MathUtil.strip(0.1 * 0.2)}
      </Page.Main>
    </Page>
  )
}
```
