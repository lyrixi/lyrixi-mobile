import React from 'react'
import { Page, Card, Space, Button } from 'lyrixi-mobile'

const buttons = Array.from({ length: 6 }).map((_, index) => (
  <Button key={index}>Button {index + 1}</Button>
))

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Horizontal</Card.Header>
          <Card.Main>
            <Space.Compact size="m">
              <Space.Addon>+86</Space.Addon>
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Space.Compact>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Block</Card.Header>
          <Card.Main>
            <Space.Compact block>
              <Space.Addon>+86</Space.Addon>
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Space.Compact>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Size</Card.Header>
          <Card.Main>
            <Space direction="vertical">
              <Space.Compact size="s">
                <Space.Addon>+86</Space.Addon>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Space.Compact>

              <Space.Compact size="m">
                <Space.Addon>+86</Space.Addon>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Space.Compact>

              <Space.Compact size="l">
                <Space.Addon>+86</Space.Addon>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Space.Compact>
            </Space>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Radius</Card.Header>
          <Card.Main>
            <Space direction="vertical">
              <Space.Compact radius="s">
                <Space.Addon>+86</Space.Addon>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Space.Compact>

              <Space.Compact radius="m">
                <Space.Addon>+86</Space.Addon>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Space.Compact>

              <Space.Compact radius="l">
                <Space.Addon>+86</Space.Addon>
                <Button color="primary" backgroundColor="white">
                  Sent
                </Button>
                <Button>Retry</Button>
              </Space.Compact>
            </Space>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Vertical</Card.Header>
          <Card.Main>
            <Space.Compact direction="vertical" size="m">
              <Button>Button1</Button>
              <Button color="primary" backgroundColor="white">
                Button2
              </Button>
              <Button>Button3</Button>
            </Space.Compact>
          </Card.Main>
        </Card>
        Space.Compact supports `Space.Addon|Button`
      </Page.Main>
    </Page>
  )
}
