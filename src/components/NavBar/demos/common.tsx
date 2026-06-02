import { Page, NavBar, Divider, Button, Icon, Icons } from 'lyrixi-mobile'

export default function CommonDemo() {
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
              svg={Icons.Close} size="12"
              style={{ padding: 4 }}
              radius="100%"
              backgroundColor="secondary"
            />
          </NavBar.Button>
          <NavBar.Button>
            <Button.Icon
              svg={Icons.ThreeDots}
              size="12"
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
              svg={Icons.Close} size="12"
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
