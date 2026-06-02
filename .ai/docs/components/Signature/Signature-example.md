# Signature Example

以下示例位于本目录 `demos/`（由 `src/components/Signature/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Signature } from 'lyrixi-mobile'`

## demos/SignatureCombo.tsx

```tsx
import { useEffect, useState } from 'react'

import { Signature, Page, Bridge } from 'lyrixi-mobile'

// Test safe area
// import { SafeArea } from 'lyrixi-mobile'
// SafeArea.debug()

export default function SignatureComboDemo() {
  const [value, setValue] = useState<string | null>(
    'https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png'
  )

  useEffect(() => {
    Bridge.load({})
  }, [])

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">手写签名</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Combo
          // color="#000000"
          // backgroundColor="white"
          // disabled={true}
          value={value ?? undefined}
          onChange={(newVal) => {
            console.log(newVal)
            setValue(newVal)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/SignatureModal.tsx

```tsx
import { Signature, Page } from 'lyrixi-mobile'

export default function SignatureModalDemo() {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">手写签名</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Modal
          open={true}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```

## demos/SignatureMain.tsx

```tsx
import { Signature, Page } from 'lyrixi-mobile'

export default function SignatureMainDemo() {
  return (
    <Page>
      <Page.Header className="lyrixi-text-center">手写签名</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Signature.Main
          style={{ height: 400 }}
          onChange={(base64) => {
            console.log(base64)
          }}
        />
      </Page.Main>
    </Page>
  )
}
```
