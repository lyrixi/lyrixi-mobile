# QRCode Example

以下示例位于本目录 `demos/`（由 `src/components/QRCode/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { QRCode } from 'lyrixi-mobile'`

## demos/QRCode.tsx

```tsx
import { useState, useEffect, type CSSProperties } from 'react'

import { QRCode } from 'lyrixi-mobile'

const Logo: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '50px',
  height: '50px',
  marginLeft: '-25px',
  marginTop: '-25px'
}
export default function QRCodeDemo() {
  const [url, setUrl] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setUrl('abc')
    }, 1000)
  }, [])
  return (
    <>
      <QRCode text={url} style={{ width: '300px', height: '300px' }}>
        <img
          style={Logo}
          alt=""
          src="https://lyrixi.github.io/lyrixi-mobile/assets/images/logo.png"
        />
      </QRCode>
    </>
  )
}
```
