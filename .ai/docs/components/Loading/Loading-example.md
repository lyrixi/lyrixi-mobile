# Loading Example

以下示例位于本目录 `demos/`（由 `src/components/Loading/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Loading } from 'lyrixi-mobile'`

## demos/LoadingShow.tsx

```tsx
import { Page } from 'lyrixi-mobile'
import { Loading } from 'lyrixi-mobile'

export default function LoadingShowDemo() {
  function handleToggle() {
    // Loading.defaultProps = {
    //   style: { backgroundColor: 'blue' },
    //   maskStyle: { backgroundColor: 'red' }
    // }

    let loading = Loading.show({
      style: { backgroundColor: 'blue' },
      maskStyle: { backgroundColor: 'red' },
      className: 'abc',
      content: '自定义加载'
    })
    console.log(loading)
    setTimeout(() => {
      Loading.show()
    }, 3000)
    setTimeout(() => {
      Loading.hide()
    }, 6000)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.show</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/LoadingHide.tsx

```tsx
import { Page, Loading } from 'lyrixi-mobile'

export default function LoadingHideDemo() {
  function handleToggle() {
    Loading.show()
    setTimeout(() => {
      Loading.hide()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.hide</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Loading toggle
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/LoadingExists.tsx

```tsx
import { useState } from 'react'

import { Page, Loading, Button, Toast } from 'lyrixi-mobile'

export default function LoadingExistsDemo() {
  const [exists, setExists] = useState(false)

  function handleShow() {
    Loading.show({ content: 'Loading...' })
    setTimeout(() => {
      Loading.hide()
    }, 5000)
    checkExists()
  }

  function handleHide() {
    Loading.hide()
    checkExists()
  }

  function checkExists() {
    const result = Loading.exists()
    setExists(result)
    Toast.show({ content: result ? 'Loading exists' : 'Loading not exists', duration: 1000 })
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Loading.exists</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ marginBottom: '8px' }}>
              Current Status: {exists ? 'exists' : 'not exists'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button onClick={handleShow}>Show Loading</Button>
            <Button onClick={handleHide}>Hide Loading</Button>
            <Button onClick={checkExists}>Check Exists</Button>
          </div>
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/Loading.tsx

```tsx
import { Page, Loading } from 'lyrixi-mobile'

export default function LoadingDemo() {
  return (
    <Page>
      <Page.Main>
        <Loading>
          {/* Loading 示例内容 */}
        </Loading>
      </Page.Main>
    </Page>
  )
}
```

## demos/LoadingSpinFade.tsx

```tsx
import { Page, Loading } from 'lyrixi-mobile'

export default function LoadingSpinFadeDemo() {
  return (
    <Page>
      <Page.Main>
        <Loading.SpinFade />
      </Page.Main>
    </Page>
  )
}
```

## demos/LoadingOuroboros.tsx

```tsx
import { Page, Loading } from 'lyrixi-mobile'

export default function LoadingOuroborosDemo() {
  return (
    <Page>
      <Page.Main>
        <Loading.Ouroboros />
      </Page.Main>
    </Page>
  )
}
```

## demos/LoadingBallWave.tsx

```tsx
import { Page, Loading } from 'lyrixi-mobile'

export default function LoadingBallWaveDemo() {
  return (
    <Page>
      <Page.Main>
        <Loading.BallWave />
      </Page.Main>
    </Page>
  )
}
```
