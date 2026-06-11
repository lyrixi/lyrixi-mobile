import React from 'react'
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
              style={{ padding: 5 }}
              radius="100%"
              size="10px"
              color="secondary"
              backgroundColor="default"
            />
          </NavBar.Button>
          <NavBar.Button>
            <Button.Icon
              svg={Icons.ThreeDots}
              style={{ padding: 5 }}
              radius="100%"
              size="10px"
              color="secondary"
              backgroundColor="default"
            />
            <Button.Text>More</Button.Text>
          </NavBar.Button>
        </NavBar>

        <Divider>Title</Divider>
        <NavBar>
          <NavBar.Button>
            <Icon
              svg={Icons.Close}
              style={{ padding: 5 }}
              radius="100%"
              size="10px"
              color="secondary"
              backgroundColor="default"
            />
          </NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button color="primary">Ok</NavBar.Button>
        </NavBar>
      </Page.Main>
    </Page>
  )
}
