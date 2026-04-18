import React from 'react'
import { Page, Card, Flex, Button } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Horizontal</Card.Header>
          <Card.Main>
            <Flex.Compact size="m">
              <Button>Content</Button>
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Flex.Compact>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Block</Card.Header>
          <Card.Main>
            <Flex.Compact block>
              <Button>Content</Button>
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Flex.Compact>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Size</Card.Header>
          <Card.Main>
            <Flex direction="vertical">
              <Flex.Compact size="s">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact size="m">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact size="l">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>
            </Flex>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Radius</Card.Header>
          <Card.Main>
            <Flex direction="vertical">
              <Flex.Compact radius="s">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact radius="m">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>

              <Flex.Compact radius="l">
                <Button>Content</Button>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Flex.Compact>
            </Flex>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Vertical</Card.Header>
          <Card.Main>
            <Flex.Compact direction="vertical" size="m">
              <Button>Button1</Button>
              <Button color="primary" backgroundColor="white">
                Button2
              </Button>
              <Button>Button3</Button>
            </Flex.Compact>
          </Card.Main>
        </Card>
        Flex.Compact supports `Button`
      </Page.Main>
    </Page>
  )
}
