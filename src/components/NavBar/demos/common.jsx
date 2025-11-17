import React from 'react'

import { Page, NavBar, Button, Divider } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>Normal</Divider>
        <NavBar>
          <NavBar.Button icon="lyrixi-iconfont-arrow-left">Back</NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button color="primary">Ok</NavBar.Button>
        </NavBar>

        <Divider>Button Shape</Divider>
        <NavBar>
          <NavBar.Button
            icon="lyrixi-iconfont-close"
            iconSize={20}
            iconPadding={8}
            iconRadius="100%"
            iconBackgroundColor="secondary"
          />
          <NavBar.Button
            icon="lyrixi-iconfont-three-dots"
            iconSize={20}
            iconPadding={8}
            iconRadius="2px"
            iconBackgroundColor="secondary"
          >
            More
          </NavBar.Button>
        </NavBar>

        <Divider>Title</Divider>
        <NavBar>
          <NavBar.Button
            icon="lyrixi-iconfont-close"
            iconSize={20}
            iconPadding={8}
            iconRadius="100%"
            iconBackgroundColor="secondary"
          />
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button className="lyrixi-primary">Ok</NavBar.Button>
        </NavBar>
      </Page.Main>
    </Page>
  )
}
