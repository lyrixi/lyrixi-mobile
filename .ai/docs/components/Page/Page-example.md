# Page Example

以下示例位于本目录 `demos/`（由 `src/components/Page/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Page } from 'lyrixi-mobile'`

## demos/Page.tsx

```tsx
import { useEffect } from 'react'

import { createPortal } from 'react-dom'
import { Page } from 'lyrixi-mobile'

import type { PageDemoRow } from './Page.demos.types'

const list: PageDemoRow[] = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: '测试数据' + i
  })
}

export default function PageDemo() {
  const { Header, Footer, Aside, Main } = Page
  useEffect(() => {
    const root = document.getElementById('root')
    root?.parentElement?.removeChild(root)
  }, [])

  function handleBottomRefresh() {
    console.log('底部加载')
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 5000)
    })
  }

  return createPortal(
    <Page>
      <Header style={{ height: '44px', backgroundColor: '#7dbcea' }}>Header</Header>
      <Page full={false} layout="horizontal">
        <Aside style={{ width: '80px', backgroundColor: '#3ba0e9' }}>Aside</Aside>
        <Main
          safeArea
          style={{ backgroundColor: 'rgba(16, 142, 233, 1)' }}
          onBottomRefresh={handleBottomRefresh}
        >
          {list.map((item, index) => {
            return <div key={index}>{item.name}</div>
          })}
        </Main>
      </Page>
      <Footer safeArea style={{ height: '44px', backgroundColor: '#7dbcea' }}>
        Footer
      </Footer>
    </Page>,
    document.body
  )
}
```

## demos/PageHeader.tsx

```tsx
import { Page } from 'lyrixi-mobile'

export default function PageHeaderDemo() {
  return (
    <Page>
      <Page.Main>
        <Page.Header>{/* Page.Header 示例内容 */}</Page.Header>
      </Page.Main>
    </Page>
  )
}
```

## demos/PageMain.tsx

```tsx
import { Page } from 'lyrixi-mobile'

export default function PageMainDemo() {
  return (
    <Page>
      <Page.Main>
        <Page.Main>{/* Page.Main 示例内容 */}</Page.Main>
      </Page.Main>
    </Page>
  )
}
```

## demos/PageFooter.tsx

```tsx
import { Page } from 'lyrixi-mobile'

export default function PageFooterDemo() {
  return (
    <Page>
      <Page.Main>
        <Page.Footer>{/* Page.Footer 示例内容 */}</Page.Footer>
      </Page.Main>
    </Page>
  )
}
```
