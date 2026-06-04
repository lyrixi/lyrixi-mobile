# NavBar Example

以下示例位于本目录 `demos/`（由 `src/components/NavBar/demos` 同步，运行 `npm run build:ai-docs` 更新）。

业务代码引入：`import { NavBar } from 'lyrixi-mobile'`

## demos/NavBar.tsx

```tsx
import { Page, NavBar, Divider, Button, Icon, Icons } from 'lyrixi-mobile'

export default function NavBarDemo() {
  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>Normal</Divider>
        <NavBar>
          <NavBar.Button>
            <Button.Icon svg={Icons.ArrowLeft} />
            <Button.Text>Back</Button.Text>
          </NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button color="primary">Ok</NavBar.Button>
        </NavBar>

        <Divider>Button Shape</Divider>
        <NavBar>
          <NavBar.Button>
            <Icon
              svg={Icons.Close}
              size="12px"
              style={{ padding: 4 }}
              radius="100%"
              backgroundColor="secondary"
            />
          </NavBar.Button>
          <NavBar.Button>
            <Button.Icon
              svg={Icons.ThreeDots}
              size="12px"
              style={{ padding: 4 }}
              radius="2px"
              backgroundColor="secondary"
            />
            <Button.Text>More</Button.Text>
          </NavBar.Button>
        </NavBar>

        <Divider>Title</Divider>
        <NavBar>
          <NavBar.Button>
            <Icon
              svg={Icons.Close}
              size="12px"
              style={{ padding: 4 }}
              radius="100%"
              backgroundColor="secondary"
            />
          </NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button color="primary">Ok</NavBar.Button>
        </NavBar>
      </Page.Main>
    </Page>
  )
}
```

## demos/NavBarTitle.tsx

```tsx
import { Page, NavBar } from 'lyrixi-mobile'

export default function NavBarTitleDemo() {
  return (
    <Page>
      <Page.Main>
        <NavBar.Title>{/* NavBar.Title 示例内容 */}</NavBar.Title>
      </Page.Main>
    </Page>
  )
}
```

## demos/NavBarButton.tsx

```tsx
import { Page, NavBar } from 'lyrixi-mobile'

export default function NavBarButtonDemo() {
  return (
    <Page>
      <Page.Main>
        <NavBar.Button>{/* NavBar.Button 示例内容 */}</NavBar.Button>
      </Page.Main>
    </Page>
  )
}
```
