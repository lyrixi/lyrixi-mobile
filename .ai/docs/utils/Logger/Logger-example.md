# Logger Example

以下示例位于本目录 `demos/`（由 `src/utils/Logger/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Logger } from 'lyrixi-mobile'`

## demos/Logger.tsx

```tsx
import { Logger, Page, Button, Card, Divider } from 'lyrixi-mobile'
import upload from './upload'

export default function LoggerDemo() {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Function</Divider>
          <div style={{ margin: '0 12px' }}>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                let isOK = await Logger.config({
                  types: ['indexedDB', 'webSQL']
                })
                console.log(`Config successfully:`, isOK)
              }}
            >
              Logger.Config to cover console.info
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={() => {
                console.info('test log 1')
                console.info('test log 2')
                console.info('test log 3')
              }}
            >
              console.info
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                await Logger.setLogs(['test'])
                console.log('Set logs successfully')
              }}
            >
              Logger.setLogs
            </Button>
            <br />
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const logs = await Logger.getLogs()
                console.log('获取所有日志成功:', logs)
              }}
            >
              Logger.getLogs (All)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const today = new Date()
                const logs = await Logger.getLogs(today)
                console.log('获取今日日志成功:', logs)
              }}
            >
              Logger.getLogs (Today)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                await Logger.clearLogs()
                console.log('Clear logs successfully')
              }}
            >
              Logger.clearLogs (All)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const today = new Date()
                await Logger.clearLogs(today)
                console.log(`Clear logs for ${today.toISOString().split('T')[0]} successfully`)
              }}
            >
              Logger.clearLogs (Today)
            </Button>
            <Button
              className="lyrixi-margin-vertical-l lyrixi-margin-horizontal-m"
              radius="m"
              onClick={async () => {
                const result = await Logger.uploadLogs(upload)
                console.log(`Result:`, result)
              }}
            >
              Logger.uploadLogs
            </Button>
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
```

## demos/Logger.demos.types.ts

```ts
export type LoggerDemoLogUploadPayload = { date: Date; content: unknown }
```

## demos/upload.ts

```ts
import { Device, Request, DateUtil } from 'lyrixi-mobile'

import type { LoggerDemoLogUploadPayload } from './Logger.demos.types'

function upload(data: unknown): Promise<boolean> {
  const { date, content } = data as LoggerDemoLogUploadPayload
  // 调用上报接口
  return new Promise((resolve) => {
    // 生成文件名: ${YYYYMMDD}_${Device.platform}_${username}_${userId}_${hhmmss}.txt
    const dateStr = DateUtil.format(date, 'YYYYMMDD')
    const username = window.loginUser?.name || 'unknown'
    const userId = window.loginUser?.id || 'unknown'
    const platform = Device.platform || 'unknown'

    const fileName = `${dateStr}_${platform}_${username}_${userId}.txt`

    // 构建日志内容
    const fileContent = [
      `UserAgent: ${navigator.userAgent || ''}`,
      `TenantId: ${window.loginUser?.tenantId || ''}`,
      `UserId: ${window.loginUser?.id || ''}`,
      `Date: ${dateStr}`,
      content
    ].join('\n')

    // 调用上传接口
    Request.post('/fileupload/v1/uploadTextToLogCenter.do', {
      fileName: fileName,
      fileContent: fileContent
    })
      .then((response: unknown) => {
        const r = response as { code?: string }
        if (r.code === '1') {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch((error) => {
        console.error('日志上传失败:', error)
        resolve(false)
      })
  })
}

export default upload
```
