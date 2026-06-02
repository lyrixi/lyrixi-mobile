# Switch Example

以下示例位于本目录 `demos/`（由 `src/components/Switch/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Switch } from 'lyrixi-mobile'`

## demos/Switch.tsx

```tsx
import { useState } from 'react'

import { Page, Divider, Switch } from 'lyrixi-mobile'

export default function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <Page>
      <Page.Main>
        <Divider>Size m</Divider>
        <Switch
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          // disabled
          checked={checked}
          on="On On On On"
          off="Off"
          onChange={setChecked}
        />
        <Divider>Size s</Divider>
        <Switch
          size="s"
          // disabled
          checked={checked}
          onChange={setChecked}
        />
        <Switch
          size="s"
          // disabled
          checked={checked}
          on="On"
          off="Off"
          onChange={setChecked}
        />
      </Page.Main>
    </Page>
  )
}
```
