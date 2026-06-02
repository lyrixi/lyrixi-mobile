# Progress Example

以下示例位于本目录 `demos/`（由 `src/components/Progress/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Progress } from 'lyrixi-mobile'`

## demos/ProgressBar.tsx

```tsx
import { Page, Progress, Divider, Card } from 'lyrixi-mobile'

const BasicBarDemo = () => {
  return (
    <Page>
      <Page.Main>
        <Divider>基础用法</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar percent={75} />
        </Card>

        <Divider>Size</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar percent={60} style={{ '--lyrixi-progress-track-width': '4px' }} />
          <Progress.Bar
            percent={60}
            style={{ '--lyrixi-progress-track-width': '12px', margin: '12px 0' }}
          />
          <Progress.Bar percent={60} style={{ '--lyrixi-progress-track-width': '20px' }} />
        </Card>

        <Divider>Color</Divider>
        <Card style={{ padding: '10px 12px' }}>
          <Progress.Bar
            percent={80}
            style={{
              '--lyrixi-progress-fill-color': '#722ed1',
              '--lyrixi-progress-bg-color': '#f9f0ff'
            }}
          />
          <Progress.Bar
            percent={45}
            style={{
              '--lyrixi-progress-fill-color': '#fa8c16',
              '--lyrixi-progress-bg-color': '#fff7e6',
              margin: '12px 0'
            }}
          />
          <Progress.Bar percent={100} className="lyrixi-success" style={{ margin: '12px 0' }} />
          <Progress.Bar percent={100} className="lyrixi-danger" />
        </Card>
      </Page.Main>
    </Page>
  )
}

export default BasicBarDemo
```

## demos/ProgressCircle.tsx

```tsx
import { Page, Progress, Divider, Card } from 'lyrixi-mobile'

const BasicDemo = () => {
  return (
    <Page>
      <Page.Main>
        <Divider>基础用法</Divider>
        <Card>
          <Progress.Circle percent={75}>
            <span>75%</span>
          </Progress.Circle>
        </Card>

        <Divider>Size</Divider>
        <Card>
          <Progress.Circle percent={60} size={50}>
            <span>60%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={60}
            size={80}
            style={{
              '--lyrixi-progress-track-width': '8px'
            }}
          >
            <span className="lyrixi-font-size-xl">60%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={60}
            size={100}
            style={{
              '--lyrixi-progress-track-width': '10px'
            }}
          >
            <span className="lyrixi-font-size-xxl">60%</span>
          </Progress.Circle>
        </Card>

        <Divider>Color</Divider>
        <Card>
          <Progress.Circle
            percent={80}
            style={{
              '--lyrixi-progress-fill-color': '#722ed1',
              '--lyrixi-progress-bg-color': '#f9f0ff'
            }}
          >
            <span>80%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={45}
            style={{
              '--lyrixi-progress-fill-color': '#fa8c16',
              '--lyrixi-progress-bg-color': '#fff7e6'
            }}
          >
            <span>45%</span>
          </Progress.Circle>

          <Progress.Circle percent={100} className="lyrixi-success">
            <span className="lyrixi-color-success">Ok</span>
          </Progress.Circle>

          <Progress.Circle percent={100} className="lyrixi-danger">
            <span className="lyrixi-color-danger">Error</span>
          </Progress.Circle>
        </Card>
      </Page.Main>
    </Page>
  )
}

export default BasicDemo
```
