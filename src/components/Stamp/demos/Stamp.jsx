import React from 'react'
import { Page, Card, Stamp } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Round</Card.Header>
          <Card.Main>
            <Stamp color="primary">Primary</Stamp>
            <Stamp color="info">Link</Stamp>
            <Stamp color="warning">Warning</Stamp>
            <Stamp color="danger">Danger</Stamp>
            <Stamp color="success">Success</Stamp>
            <Stamp color="disabled">Disabled</Stamp>
            <Stamp color="#ff8800">ff8800</Stamp>
          </Card.Main>
        </Card>
        <Card>
          <Card.Header>Rect</Card.Header>
          <Card.Main>
            <Stamp color="primary" shape="rect">Primary</Stamp>
            <Stamp color="info" shape="rect">Link</Stamp>
            <Stamp color="warning" shape="rect">Warning</Stamp>
            <Stamp color="danger" shape="rect">Danger</Stamp>
            <Stamp color="success" shape="rect">Success</Stamp>
            <Stamp color="disabled" shape="rect">Disabled</Stamp>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
