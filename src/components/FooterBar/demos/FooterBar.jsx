import React from 'react'
import { Icon, Page, Divider, FooterBar, Button } from 'lyrixi-mobile'

export default () => {
  return (
    <Page safeArea>
      <Page.Main>
        <Divider>Text Button</Divider>
        <FooterBar>
          <FooterBar.Button
            block
            list={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          >
            <Icon className="lyrixi-iconfont-three-dots" size="xl" />
          </FooterBar.Button>

          <FooterBar.Button
            block
            onClick={(e) => {
              console.log(e)
            }}
          >
            <Icon className="lyrixi-iconfont-config" size="xl" />
          </FooterBar.Button>

          <FooterBar.Button
            block
            color="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>

          <FooterBar.Button
            block
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
        </FooterBar>

        <Divider>Text Button disabled</Divider>
        <FooterBar>
          <FooterBar.Button
            disabled
            block
            list={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          >
            <Icon className="lyrixi-iconfont-three-dots" size="xl" />
          </FooterBar.Button>

          <FooterBar.Button
            disabled
            block
            onClick={(e) => {
              console.log(e)
            }}
          >
            <Icon className="lyrixi-iconfont-config" size="xl" />
          </FooterBar.Button>

          <FooterBar.Button
            disabled
            block
            color="primary"
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>

          <FooterBar.Button
            disabled
            block
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
        </FooterBar>

        <Divider>Button</Divider>
        <FooterBar>
          <FooterBar.Button
            direction="vertical"
            fontSize="12px"
            list={[
              {
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
            style={{ fontSize: '12px', flex: 'none', padding: '0 12px' }}
          >
            <Button.Icon className="lyrixi-iconfont-three-dots" size="xl" />
            <Button.Text>More</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            direction="vertical"
            fontSize="12px"
            onClick={(e) => {
              console.log(e)
            }}
            style={{ fontSize: '12px', flex: 'none', padding: '0 12px' }}
          >
            <Button.Icon className="lyrixi-iconfont-config" />
            <Button.Text>Config</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            block
            backgroundColor="default"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            block
            color="white"
            backgroundColor="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
        </FooterBar>

        <Divider>Button disabled</Divider>
        <FooterBar>
          <FooterBar.Button
            disabled
            direction="vertical"
            fontSize="12px"
            list={[
              {
                disabled: true,
                id: 'option1',
                name: 'Option 1',
                onClick: (e) => {
                  console.log(e)
                }
              },
              {
                id: 'option2',
                name: 'Option 2',
                onClick: (e) => {
                  console.log(e)
                }
              }
            ]}
          >
            <Button.Icon className="lyrixi-iconfont-three-dots" size="xl" />
            <Button.Text>More</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            direction="vertical"
            fontSize="12px"
            onClick={(e) => {
              console.log(e)
            }}
          >
            <Button.Icon className="lyrixi-iconfont-config" />
            <Button.Text>Config</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            block
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            block
            color="white"
            backgroundColor="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
        </FooterBar>
      </Page.Main>
    </Page>
  )
}
