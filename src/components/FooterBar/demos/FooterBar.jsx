import React from 'react'
import { Icon, Page, Divider, FooterBar } from 'lyrixi-mobile'

export default () => {
  return (
    <Page safeArea>
      <Page.Main>
        <Divider>Text Button</Divider>
        <FooterBar>
          <FooterBar.Button
            iconClassName="lyrixi-iconfont-three-dots"
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
          />
          <FooterBar.Button
            iconClassName="lyrixi-iconfont-config"
            onClick={(e) => {
              console.log(e)
            }}
          />

          <FooterBar.Button
            color="primary"
            backgroundColor="transparent"
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            backgroundColor="transparent"
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
            iconClassName="lyrixi-iconfont-three-dots"
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
          />
          <FooterBar.Button
            disabled
            iconClassName="lyrixi-iconfont-config"
            onClick={(e) => {
              console.log(e)
            }}
          />
          <FooterBar.Button
            disabled
            color="primary"
            backgroundColor="transparent"
            size="s"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            backgroundColor="transparent"
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
            iconPosition="top"
            iconClassName="lyrixi-iconfont-three-dots"
            iconSize="16px"
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
            More
          </FooterBar.Button>
          <FooterBar.Button
            iconPosition="top"
            iconClassName="lyrixi-iconfont-config"
            onClick={(e) => {
              console.log(e)
            }}
            style={{ fontSize: '12px', flex: 'none', padding: '0 12px' }}
          >
            Config
          </FooterBar.Button>
          <FooterBar.Button
            backgroundColor="default"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
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
            iconClassName="lyrixi-iconfont-three-dots"
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
            More
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            iconClassName="lyrixi-iconfont-config"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Config
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            disabled
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
