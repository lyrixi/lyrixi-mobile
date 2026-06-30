import React from 'react'
import { Page, NavBar, Divider, Button, Icon, Icons } from 'lyrixi-mobile'

export default function CommonDemo() {
  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>Normal</Divider>
        <NavBar>
          <NavBar.Left>
            <NavBar.Button>
              <Button.Icon svg={Icons.ArrowLeft} />
              <Button.Text>Back</Button.Text>
            </NavBar.Button>
          </NavBar.Left>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Right>
            <NavBar.Button color="primary">Ok</NavBar.Button>
          </NavBar.Right>
        </NavBar>

        <Divider>Button Shape</Divider>
        <NavBar>
          <NavBar.Left>
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
          </NavBar.Left>
          <NavBar.Right>
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
          </NavBar.Right>
        </NavBar>

        <Divider>Title</Divider>
        <NavBar>
          <NavBar.Left>
            <NavBar.Button>
              <Icon
                svg={Icons.Close}
                size="12px"
                style={{ padding: 4 }}
                radius="100%"
                backgroundColor="default"
              />
            </NavBar.Button>
          </NavBar.Left>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Right>
            <NavBar.Button color="primary">Ok</NavBar.Button>
          </NavBar.Right>
        </NavBar>
      </Page.Main>
    </Page>
  )
}
