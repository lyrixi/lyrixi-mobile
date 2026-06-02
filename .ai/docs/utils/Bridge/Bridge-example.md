# Bridge Example

以下示例位于本目录 `demos/`（由 `src/utils/Bridge/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Bridge } from 'lyrixi-mobile'`

## demos/Bridge.tsx

```tsx
import { useRef } from 'react'

import vconsole from 'vconsole'

import {
  Loading,
  Button,
  Bridge,
  Page,
  Divider,
  Card,
  type BridgeSuccessResult,
  type BridgeErrorResult,
  type BridgeCancelResult,
  type BridgeScanCodeResultData,
  type BridgeChooseMediaResultData,
  type BridgeGetLocationResultData
} from 'lyrixi-mobile'

new vconsole()

export default function BridgeDemo() {
  const imageLocalFiles = useRef<unknown[] | null>(null)

  return (
    <Page>
      <Page.Main>
        <Divider>窗口接口</Divider>
        <Card>
          <Card.Header>打开新窗口接口</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.openWindow({ title: '测试', url: 'https://www.baidu.com/' })
              }}
            >
              openWindow
            </Button>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>关闭当前网页窗口接口(仅客户端与企微)</Card.Header>
          <Card.Main>
            <a href="/#/test?title=test&isFromApp=confirm-close:11">返回提示11, 并关闭webview</a>
            <br />
            <a href="/#/test?title=test&isFromApp=confirm-close">返回提示, 并关闭webview</a>
            <br />
            <a href="/#/test?title=test&isFromApp=confirm:11">返回提示11</a>
            <br />
            <a href="/#/test?title=test&isFromApp=confirm">返回提示</a>
            <br />
            <a href="/#/test?title=test&isFromApp=1">返回时将会关闭webview</a>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.closeWindow()
              }}
            >
              closeWindow(全平台支持)
            </Button>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.back()
              }}
            >
              back(全平台支持)
            </Button>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>监听页面返回事件(仅客户端与企微)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.onBack({
                  onSuccess: () => {
                    console.log('阻止返回')
                    alert('阻止返回')
                  }
                })
              }}
            >
              onBack
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>修改页面title</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.setTitle({
                  title: '自定义标题'
                })
              }}
            >
              setTitle
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>退出至登录页面(仅客户端)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                ;(Bridge as { logOut?: () => void }).logOut?.()
              }}
            >
              logout
            </Button>
          </Card.Main>
        </Card>

        <Card>
          <Card.Header>返回首页(仅订货客户端支持)</Card.Header>
          <Card.Main>
            <Button
              className="lyrixi-primary lyrixi-flex"
              style={{ margin: '12px 10px' }}
              radius="m"
              onClick={() => {
                Bridge.goHome()
              }}
            >
              goHome
            </Button>
          </Card.Main>
        </Card>

        <Divider>媒体接口</Divider>
        <Card>
// ... 其余见 demos/Bridge.tsx 全文
```
