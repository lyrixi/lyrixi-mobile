import { Icon, Page, Divider, FooterBar, Button, Icons } from 'lyrixi-mobile'

export default function FooterBarDemo() {
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
            <Icon svg={Icons.ThreeDots} size="xl" />
          </FooterBar.Button>

          <FooterBar.Button
            block
            onClick={(e) => {
              console.log(e)
            }}
          >
            <Icon svg={Icons.Config} size="xl" />
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
            <Icon svg={Icons.ThreeDots} size="xl" />
          </FooterBar.Button>

          <FooterBar.Button
            disabled
            block
            onClick={(e) => {
              console.log(e)
            }}
          >
            <Icon svg={Icons.Config} size="xl" />
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
            <Button.Icon svg={Icons.ThreeDots} size="xl" />
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
            <Button.Icon svg={Icons.Config} />
            <Button.Text>Icons.Config</Button.Text>
          </FooterBar.Button>
          <FooterBar.Button
            block
            variant="filled" color="default"
            onClick={(e) => {
              console.log(e)
            }}
          >
            Cancel
          </FooterBar.Button>
          <FooterBar.Button
            block
            variant="filled" color="primary"
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
            <Button.Icon svg={Icons.ThreeDots} size="xl" />
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
            <Button.Icon svg={Icons.Config} />
            <Button.Text>Icons.Config</Button.Text>
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
            variant="filled" color="primary"
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
