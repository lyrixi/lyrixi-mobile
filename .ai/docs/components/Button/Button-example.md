# Button Example

以下示例位于本目录 `demos/`（由 `src/components/Button/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Button } from 'lyrixi-mobile'`

## demos/Button.tsx

```tsx
import { Page, Divider, Button, Icon, Icons } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Color & Background & Border</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button backgroundColor="white" radius="m" borderColor="default" style={buttonStyle}>
            backgroundColor="white"
          </Button>
          <Button
            backgroundColor="white"
            radius="m"
            borderColor="default"
            disabled
            style={buttonStyle}
          >
            disabled
          </Button>
          <br />
          <Button backgroundColor="default" border="none" radius="m" style={buttonStyle}>
            backgroundColor="default" border="none"
          </Button>
          <Button
            backgroundColor="default"
            border="solid"
            borderColor="default"
            radius="m"
            style={buttonStyle}
          >
            backgroundColor="default" border="solid"
          </Button>
          <Button
            backgroundColor="default"
            border="dashed"
            borderColor="default"
            radius="m"
            style={buttonStyle}
          >
            backgroundColor="default" border="dashed"
          </Button>
          <br />
          <Button
            backgroundColor="transparent"
            border="none"
            borderColor="default"
            radius="m"
            style={buttonStyle}
          >
            backgroundColor="transparent" border="none"
          </Button>
          <Button
            backgroundColor="transparent"
            border="solid"
            borderColor="default"
            radius="m"
            style={buttonStyle}
          >
            backgroundColor="transparent" border="solid"
          </Button>
          <Button
            backgroundColor="transparent"
            border="dashed"
            borderColor="default"
            radius="m"
            style={buttonStyle}
          >
            backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            radius="m"
            style={buttonStyle}
          >
            color="white" backgroundColor="primary"
          </Button>
          <br />
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten"
          </Button>
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten" border="solid"
          </Button>
          <Button
            color="primary"
            backgroundColor="primary-lighten"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="primary-lighten" border="dashed"
          </Button>
          <br />
          <Button
            color="primary"
            backgroundColor="transparent"
            border="none"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="none"
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="solid"
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="dashed"
            radius="m"
            style={buttonStyle}
          >
            color="primary" backgroundColor="transparent" border="dashed"
          </Button>
        </div>

        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            color="white"
            backgroundColor="info"
            borderColor="info"
            radius="m"
// ... 其余见 demos/Button.tsx 全文
```

## demos/ButtonText.tsx

```tsx
import { Page, Divider, Button, Icons } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonTextDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Text 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" borderColor="primary" radius="m" style={buttonStyle}>
            <Button.Text>按钮文本</Button.Text>
          </Button>
          <Button color="primary" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Text>主要按钮</Button.Text>
          </Button>
          <Button color="danger" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Text>危险按钮</Button.Text>
          </Button>
        </div>

        <Divider>Button.Text 自定义样式</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" borderColor="primary" radius="m" style={buttonStyle}>
            <Button.Text style={{ fontWeight: 'bold' }}>加粗文本</Button.Text>
          </Button>
          <Button color="primary" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Text style={{ fontSize: '18px' }}>大号文本</Button.Text>
          </Button>
          <Button color="default" backgroundColor="white" border="solid" radius="m" style={buttonStyle}>
            <Button.Text style={{ color: '#ff6b6b' }}>自定义颜色</Button.Text>
          </Button>
        </div>

        <Divider>Button.Text 与 Button.Icon 组合</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button color="white" backgroundColor="primary" borderColor="primary" radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Ok} />
            <Button.Text>确认</Button.Text>
          </Button>
          <Button color="primary" backgroundColor="transparent" border="solid" radius="m" style={buttonStyle}>
            <Button.Text>删除</Button.Text>
            <Button.Icon svg={Icons.Close}></Button.Icon>
          </Button>
          <Button color="default" backgroundColor="white" border="solid" radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Search}></Button.Icon>
            <Button.Text>搜索</Button.Text>
            <Button.Icon svg={Icons.ArrowRight}></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Text 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button size="xs" radius="xs" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Text>小号按钮</Button.Text>
          </Button>
          <Button size="s" radius="s" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Text>小按钮</Button.Text>
          </Button>
          <Button size="m" radius="m" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Text>中等按钮</Button.Text>
          </Button>
          <Button size="l" radius="l" color="white" backgroundColor="primary" borderColor="primary" style={buttonStyle}>
            <Button.Text>大按钮</Button.Text>
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
```

## demos/ButtonIcon.tsx

```tsx
import { Page, Divider, Button, Icons } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonIconDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Icon 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Ok} />
          </Button>
          <Button
            color="primary"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Close} />
          </Button>
          <Button
            color="danger"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Trash} />
          </Button>
          <Button
            color="success"
            backgroundColor="transparent"
            border="solid"
            radius="m"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.CircleOk} />
          </Button>
        </div>

        <Divider>Button.Icon 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            size="xs"
            radius="xs"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="xs" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="s"
            radius="s"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="s" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="m"
            radius="m"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="m" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="l"
            radius="l"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="l" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button
            size="xl"
            radius="xl"
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon size="xl" svg={Icons.Search}></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Icon 圆形按钮</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            size="32"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Ok} />
          </Button>
          <Button
            size="40"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Search} />
          </Button>
          <Button
            size="48"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Config} />
          </Button>
          <Button
            size="56"
            radius="100%"
            sizeEqual
            color="white"
            backgroundColor="primary"
            borderColor="primary"
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Plus} size="xl" />
          </Button>
// ... 其余见 demos/ButtonIcon.tsx 全文
```
