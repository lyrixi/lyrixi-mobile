import React from 'react'
import { Page, Card, Stamp } from 'lyrixi-mobile'

export default () => {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Stamp</Card.Header>
          <Card.Main>
            <Stamp color="primary">Primary</Stamp>
            <Stamp color="link">Link</Stamp>
            <Stamp color="warning">Warning</Stamp>
            <Stamp color="danger">Danger</Stamp>
            <Stamp color="success">Success</Stamp>
            <Stamp color="disabled">Disabled</Stamp>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
