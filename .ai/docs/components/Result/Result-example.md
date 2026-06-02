# Result Example

以下示例位于本目录 `demos/`（由 `src/components/Result/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Result } from 'lyrixi-mobile'`

## demos/Result.tsx

```tsx
import { Page, Result } from 'lyrixi-mobile'

export default function ResultDemo() {
  return (
    <Page>
      <Page.Main>
        <Result status={'empty'} />
      </Page.Main>
    </Page>
  )
}
```

## demos/500.tsx

```tsx
import { Page, Result, Button, LocaleUtil } from 'lyrixi-mobile'
import Bridge from './../../../utils/Bridge'

export default function Result500Demo() {
  return (
    <Page>
      <Page.Main>
        <Result status={'500'}>
          <Button
            radius="l"
            backgroundColor="primary"
            border="none"
            color="white"
            style={{ margin: '77px 12px 0 12px' }}
            onClick={() => {
              window.location.reload()
            }}
          >
            {LocaleUtil.locale('重试')}
          </Button>
          <Button
            radius="l"
            style={{ margin: '12px 12px 0 12px' }}
            onClick={() => {
              Bridge.back()
            }}
          >
            {LocaleUtil.locale('返回')}
          </Button>
        </Result>
      </Page.Main>
    </Page>
  )
}
```
