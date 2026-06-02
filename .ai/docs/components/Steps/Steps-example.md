# Steps Example

以下示例位于本目录 `demos/`（由 `src/components/Steps/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Steps } from 'lyrixi-mobile'`

## demos/Active.tsx

```tsx
import { Page, Divider, Steps, Icon, Card, Icons } from 'lyrixi-mobile'

const list = [
  {
    id: 'finish',
    title: 'Finished',
    description: 'This is a description.'
  },
  {
    id: 'progress',
    title: 'In Progress',
    description: 'This is a description.'
  },
  {
    id: 'wait',
    title: 'Waiting',
    description: 'This is a description.'
  }
]

export default function ActiveDemo() {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>Active by Index</Divider>
          <Steps value={{ index: 1 }} list={list} direction="horizontal" />
        </Card>

        <Card>
          <Divider>Active by Id</Divider>
          <Steps value={{ id: 'progress' }} list={list} direction="vertical" />
        </Card>

        <Card>
          <Divider>Active Status</Divider>
          <Steps
            value={{ id: 'progress', status: 'error' }}
            list={list}
            align="left"
            direction="horizontal"
          />
        </Card>

        <Card>
          <Divider>Active Icon</Divider>
          <Steps
            value={{
              id: 'progress',
              status: 'error',
              icon: <Icon svg={Icons.Signature} />
            }}
            list={list}
            align="left"
            direction="vertical"
          />
        </Card>
      </Page.Main>
    </Page>
  )
}
```
