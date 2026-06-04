# Button Example

以下示例位于本目录 `demos/`（由 `src/components/Button/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { Button, ButtonColor, ButtonVariant } from 'lyrixi-mobile'`

## demos/Button.tsx

```tsx
import { Page, Divider, Button, Icon, Icons, ButtonColor, ButtonVariant } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

const themeColors = [
  ButtonColor.default,
  ButtonColor.primary,
  ButtonColor.info,
  ButtonColor.warning,
  ButtonColor.danger,
  ButtonColor.success
]

const variants = [
  ButtonVariant.solid,
  ButtonVariant.text,
  ButtonVariant.outlined,
  ButtonVariant.filled,
  ButtonVariant.dashed
]

export default function ButtonDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>variant × color</Divider>
        {themeColors.map((color) => (
          <div key={color} style={{ marginTop: 'var(--lyrixi-space-l)' }}>
            <Divider>{color}</Divider>
            {variants.map((variant) => (
              <Button
                key={`${color}-${variant}`}
                variant={variant}
                color={color}
                radius="m"
                style={buttonStyle}
              >
                {variant}
              </Button>
            ))}
            <Button variant={ButtonVariant.solid} color={color} radius="m" disabled style={buttonStyle}>
              disabled
            </Button>
          </div>
        ))}

        <br />

        <Divider>sizeEqual</Divider>
        <div>
          <Button
            sizeEqual
            radius="100%"
            size="m"
            variant={ButtonVariant.solid}
            color={ButtonColor.default}
            style={buttonStyle}
          >
            <Icon svg={Icons.Search} />
          </Button>
          <Button
            sizeEqual
            size="l"
            radius="l"
            variant={ButtonVariant.solid}
            color={ButtonColor.default}
            style={buttonStyle}
          >
            <Icon svg={Icons.Search} />
          </Button>
        </div>

        <Divider>size</Divider>
        <Button
          size="xs"
          radius="xs"
          variant={ButtonVariant.filled}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          xs
        </Button>
        <Button
          size="s"
          radius="s"
          variant={ButtonVariant.filled}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          s
        </Button>
        <Button
          size="m"
          radius="m"
          variant={ButtonVariant.filled}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          m
        </Button>
        <Button
          size="l"
          radius="l"
          variant={ButtonVariant.filled}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          l
        </Button>
        <Button
          size="xl"
          radius="xl"
          variant={ButtonVariant.filled}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          xl
        </Button>
        <Button
          size="xxl"
          radius="xxl"
          variant={ButtonVariant.filled}
          color={ButtonColor.primary}
          style={buttonStyle}
        >
          xxl
        </Button>

        <Divider>block</Divider>
        <Button block variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m">
          block
        </Button>
      </Page.Main>
    </Page>
  )
}
```

## demos/ButtonText.tsx

```tsx
import { Page, Divider, Button, Icons, ButtonColor, ButtonVariant } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonTextDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Text 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>按钮文本</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>主要按钮</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.danger} radius="m" style={buttonStyle}>
            <Button.Text>危险按钮</Button.Text>
          </Button>
        </div>

        <Divider>Button.Text 自定义样式</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text style={{ fontWeight: 'bold' }}>加粗文本</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text style={{ fontSize: '18px' }}>大号文本</Button.Text>
          </Button>
          <Button variant={ButtonVariant.solid} color={ButtonColor.default} radius="m" style={buttonStyle}>
            <Button.Text style={{ color: '#ff6b6b' }}>自定义颜色</Button.Text>
          </Button>
        </div>

        <Divider>Button.Text 与 Button.Icon 组合</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Ok} />
            <Button.Text>确认</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>删除</Button.Text>
            <Button.Icon svg={Icons.Close}></Button.Icon>
          </Button>
          <Button variant={ButtonVariant.solid} color={ButtonColor.default} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Search}></Button.Icon>
            <Button.Text>搜索</Button.Text>
            <Button.Icon svg={Icons.ArrowRight}></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Text 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button size="xs" radius="xs" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>小号按钮</Button.Text>
          </Button>
          <Button size="s" radius="s" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>小按钮</Button.Text>
          </Button>
          <Button size="m" radius="m" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Text>中等按钮</Button.Text>
          </Button>
          <Button size="l" radius="l" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
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
import { Page, Divider, Button, Icons, ButtonColor, ButtonVariant } from 'lyrixi-mobile'

const buttonStyle = {
  margin: 'var(--lyrixi-space-m)'
}

export default function ButtonIconDemo() {
  return (
    <Page style={{ backgroundColor: 'white' }}>
      <Page.Main>
        <Divider>Button.Icon 基础用法</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Ok} />
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Close} />
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.danger} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Trash} />
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.success} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.CircleOk} />
          </Button>
        </div>

        <Divider>Button.Icon 不同尺寸</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button size="xs" radius="xs" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Icon size="xs" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button size="s" radius="s" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Icon size="s" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button size="m" radius="m" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Icon size="m" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button size="l" radius="l" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Icon size="l" svg={Icons.Search}></Button.Icon>
          </Button>
          <Button size="xl" radius="xl" variant={ButtonVariant.filled} color={ButtonColor.primary} style={buttonStyle}>
            <Button.Icon size="xl" svg={Icons.Search}></Button.Icon>
          </Button>
        </div>

        <Divider>Button.Icon 圆形按钮</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button
            size="32"
            radius="100%"
            sizeEqual
            variant={ButtonVariant.filled}
            color={ButtonColor.primary}
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Ok} />
          </Button>
          <Button
            size="40"
            radius="100%"
            sizeEqual
            variant={ButtonVariant.filled}
            color={ButtonColor.primary}
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Search} />
          </Button>
          <Button
            size="48"
            radius="100%"
            sizeEqual
            variant={ButtonVariant.filled}
            color={ButtonColor.primary}
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Config} />
          </Button>
          <Button
            size="56"
            radius="100%"
            sizeEqual
            variant={ButtonVariant.filled}
            color={ButtonColor.primary}
            style={buttonStyle}
          >
            <Button.Icon svg={Icons.Plus} size="xl" />
          </Button>
        </div>

        <Divider>Button.Icon 不同颜色</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.StarFill} />
          </Button>
          <Button variant={ButtonVariant.filled} color={ButtonColor.info} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.CircleInfo} />
          </Button>
          <Button variant={ButtonVariant.filled} color={ButtonColor.warning} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.CircleWarning} />
          </Button>
          <Button variant={ButtonVariant.filled} color={ButtonColor.danger} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Trash} />
          </Button>
          <Button variant={ButtonVariant.filled} color={ButtonColor.success} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.CircleOk} />
          </Button>
        </div>

        <Divider>Button.Icon 与 Button.Text 组合</Divider>
        <div style={{ marginTop: 'var(--lyrixi-space-l)' }}>
          <Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Ok} />
            <Button.Text>确认</Button.Text>
          </Button>
          <Button variant={ButtonVariant.outlined} color={ButtonColor.primary} radius="m" style={buttonStyle}>
            <Button.Text>删除</Button.Text>
            <Button.Icon svg={Icons.Close} />
          </Button>
          <Button variant={ButtonVariant.solid} color={ButtonColor.default} radius="m" style={buttonStyle}>
            <Button.Icon svg={Icons.Search} />
            <Button.Text>搜索</Button.Text>
          </Button>
          <Button variant={ButtonVariant.solid} color={ButtonColor.default} radius="m" style={buttonStyle}>
            <Button.Text>更多</Button.Text>
            <Button.Icon svg={Icons.ArrowRight} />
          </Button>
        </div>
      </Page.Main>
    </Page>
  )
}
```
