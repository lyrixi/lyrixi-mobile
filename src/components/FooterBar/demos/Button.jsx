import React from 'react'
import { Icon, Page, Divider, FooterBar } from 'lyrixi-mobile'

export default () => {
  return (
    <Page safeArea>
      <Page.Main>
        <Divider>Text Button</Divider>
        <FooterBar>
          <FooterBar.Button
            className="lyrixi-flex-1"
            iconClassName="lyrixi-iconfont-three-dots"
            iconSize="xl"
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
            className="lyrixi-flex-1"
            iconClassName="lyrixi-iconfont-config"
            iconSize="xl"
            onClick={(e) => {
              console.log(e)
            }}
          />

          <FooterBar.Button
            className="lyrixi-flex-1"
            color="primary"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Ok
          </FooterBar.Button>
          <FooterBar.Button
            className="lyrixi-flex-1"
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
            className="lyrixi-flex-1"
            iconSize="xl"
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
            className="lyrixi-flex-1"
            iconSize="xl"
            iconClassName="lyrixi-iconfont-config"
            onClick={(e) => {
              console.log(e)
            }}
          />
          <FooterBar.Button
            disabled
            className="lyrixi-flex-1"
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
            className="lyrixi-flex-1"
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
            More
          </FooterBar.Button>
          <FooterBar.Button
            iconPosition="top"
            iconClassName="lyrixi-iconfont-config"
            fontSize="12px"
            onClick={(e) => {
              console.log(e)
            }}
            style={{ fontSize: '12px', flex: 'none', padding: '0 12px' }}
          >
            Config
          </FooterBar.Button>
          <FooterBar.Button
            className="lyrixi-flex-1"
            backgroundColor="default"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            className="lyrixi-flex-1"
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
            iconPosition="top"
            iconClassName="lyrixi-iconfont-three-dots"
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
            More
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            iconPosition="top"
            iconClassName="lyrixi-iconfont-config"
            fontSize="12px"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Config
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            className="lyrixi-flex-1"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            disabled
            className="lyrixi-flex-1"
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
