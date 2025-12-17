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
            <Space.Compact size="s">
              {/* <Space.Addon>+86</Space.Addon> */}
              <Button color="primary" backgroundColor="white">
                Sent
              </Button>
              <Button>Retry</Button>
            </Space.Compact>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
