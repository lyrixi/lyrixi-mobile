# Toast Example

以下示例位于本目录 `demos/`（由 `src/components/Toast/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Toast } from 'lyrixi-mobile'`

## demos/show/index.tsx

```tsx
import { Page, Toast, Button } from 'lyrixi-mobile'

export default function ToastShowDemo() {
  function handleToggle() {
    let toast = Toast.show({
      style: { backgroundColor: 'blue', color: 'green' },
      maskStyle: { backgroundColor: 'red' },
      position: 'middle',
      content: 'show toast',
      duration: 3000,
      maskClickable: false,
      onOpen: () => {
        console.log('custom open:', true)
      },
      onClose: () => {
        console.log('custom open:', false)
      }
    })
    console.log(toast)
  }

  function handleToggle2() {
    Toast.show({
      content: 'hh',
      onOpen: () => {
        console.log('hh open:', true)
      },
      onClose: () => {
        console.log('hh open:', false)
      }
    })
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Toast.show</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <Button block radius="l" style={{ margin: '10px 12px' }} onClick={handleToggle}>
          Custom Toast
        </Button>
        <Button block radius="l" style={{ margin: '10px 12px' }} onClick={handleToggle2}>
          Default Toast
        </Button>
      </Page.Main>
    </Page>
  )
}
```

## demos/hide/index.tsx

```tsx
import { Page, Toast } from 'lyrixi-mobile'

export default function ToastHideDemo() {
  function handleToggle() {
    Toast.show({
      duration: 1000000,
      content: 'show toast',
      onOpen: () => {
        console.log('open:', true)
      },
      onClose: () => {
        console.log('open:', false)
      }
    })
    setTimeout(() => {
      Toast.hide()
    }, 500)
  }

  return (
    <Page>
      <Page.Header className="lyrixi-text-center">Toast.hide</Page.Header>
      <Page.Main className="lyrixi-bg-white">
        <div className="demo-title" onClick={handleToggle}>
          Toast open toggle
        </div>
      </Page.Main>
    </Page>
  )
}
```
