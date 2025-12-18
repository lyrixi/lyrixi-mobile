import React from 'react'

import { Page, NavBar, Divider, Icon } from 'lyrixi-mobile'

export default () => {
  return (
    <Page className="lyrixi-full lyrixi-bg-white">
      <Page.Main>
        <Divider>Normal</Divider>
        <NavBar>
          <NavBar.Button>
            <Icon className="lyrixi-iconfont-arrow-left" />
            Back
          </NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button color="primary">Ok</NavBar.Button>
        </NavBar>

        <Divider>Button Shape</Divider>
        <NavBar>
          <NavBar.Button>
            <Icon
              className="lyrixi-iconfont-close"
              size={12}
              style={{ padding: 8 }}
              radius="100%"
              backgroundColor="secondary"
            />
          </NavBar.Button>
          <NavBar.Button>
            <Icon
              className="lyrixi-iconfont-three-dots"
              size={12}
              style={{ padding: 8 }}
              radius="2px"
              backgroundColor="secondary"
            />
            More
          </NavBar.Button>
        </NavBar>

        <Divider>Title</Divider>
        <NavBar>
          <NavBar.Button>
            <Icon
              className="lyrixi-iconfont-close"
              size={12}
              style={{ padding: 8 }}
              radius="100%"
              backgroundColor="secondary"
            />
          </NavBar.Button>
          <NavBar.Title>Title</NavBar.Title>
          <NavBar.Button className="lyrixi-primary">Ok</NavBar.Button>
        </NavBar>
      </Page.Main>
    </Page>
  )
}
